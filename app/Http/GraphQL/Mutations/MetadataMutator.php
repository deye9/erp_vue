<?php

namespace App\Http\GraphQL\Mutations;

use DB;
use App\Models\User;
use App\Models\Tenant;
use App\Models\Metadata;
use App\Notifications\TenantCreated;
use GraphQL\Type\Definition\ResolveInfo;
use Hyn\Tenancy\Traits\UsesTenantConnection;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class MetadataMutator
{
    /**
     * Return a value for the field.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param array $args The arguments that were passed into the field.
     * @param GraphQLContext|null $context Arbitrary data that is shared between all fields of a single query.
     * @param ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     *
     * @return mixed
    **/
    public function create($rootValue, array $args, GraphQLContext $context = null, ResolveInfo $resolveInfo)
    {
        if (strtolower($args['input']['key']) === 'branch') {
            // Get the Root user who is the Admin User.
            $user = User::getRootAdmin();
            $name = $user->name;
            $email = $user->email;
            $password = $user->getAuthPassword();

            // Check if Branch Exists already.
            $value = json_decode($args['input']['value']);
            $exist = Metadata::branchUrlExists($value->branchUrl);

            if ($exist === 'false') {
                $meta = Metadata::create($args['input']);

                // Get current Hostname
                $hostname = app(\Hyn\Tenancy\Environment::class)->hostname();

                // Create the branch and assign a URL to them.
                if (isset($hostname)) {
                    // Get FQDN (Fully-Qualified Domain Name) by current hostname
                    $fqdn = $hostname->fqdn;
                    $FQDN = explode('.', $fqdn, 2);

                    $name = $FQDN[0] . '_' . $value->branchUrl;
                    if (Tenant::tenantExists($name)) {
                        throw new \GraphQL\Error\Error("Branch URL '{$value->branchUrl}' already assigned.");
                    }

                    $tenant = Tenant::registerTenant($name, $email, $password);

                    // Invite Admin
                    $tenant->admin->notify(new TenantCreated($tenant->hostname));
                }
            } else {
                throw new \GraphQL\Error\Error("Branch URL '{$value->branchUrl}' already assigned.");
            }
        } else {
            $meta = Metadata::create($args['input']);
        }
        return $meta;
    }

    /**
     * Return a value for the field.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param array $args The arguments that were passed into the field.
     * @param GraphQLContext|null $context Arbitrary data that is shared between all fields of a single query.
     * @param ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     *
     * @return mixed
    **/
    public function update($rootValue, array $args, GraphQLContext $context = null, ResolveInfo $resolveInfo)
    {
        $id = $args['input']['id'];
        $meta = Metadata::find($id);
        $meta->update([
            'key' => $args['input']['key'],
            'value' => $args['input']['value']
        ]);
        if (strtolower($args['input']['key']) === 'branch') {
        }
        return $meta;
    }

    /**
     * Return a value for the field.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param array $args The arguments that were passed into the field.
     * @param GraphQLContext|null $context Arbitrary data that is shared between all fields of a single query.
     * @param ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     *
     * @return mixed
    **/
    public function delete($rootValue, array $args, GraphQLContext $context = null, ResolveInfo $resolveInfo)
    {
        $meta = Metadata::find($args['input']['id']);
        $value = json_decode($meta->value);

        if (strtolower($args['input']['key']) === 'branch') {
            // Get current Hostname
            $hostname = app(\Hyn\Tenancy\Environment::class)->hostname();

            // Create the branch and assign a URL to them.
            if (isset($hostname))
            {
                // Get FQDN (Fully-Qualified Domain Name) by current hostname
                $fqdn = $hostname->fqdn;
                $FQDN = explode('.', $fqdn, 2);

                $name = strtolower($FQDN[0] . '_' . trim($value->branchUrl));
            }

            $baseUrl = env('APP_URL_BASE');
            $result = Tenant::delete($name);

            if ($result === "Tenant {$name}.{$baseUrl} successfully deleted.") {
                $meta->delete();
            } else {
                throw new \GraphQL\Error\Error("Unable to remove URL '{$name}' and all associated data.");
            }
        } else {
             $meta->delete();
        }
        return $meta;
    }

    private function writeToBranchDB(array $args = [])
    {


        // queue jobs
        // trigger an event when a master tenant is having a configuration changed and listen to the event to loop over all branches and dispatch one job per branch to update the configuration on that branch, the branch specific job can be tenant aware/specific for one tenant
        // no connection overlap, fast and reliable if you have plenty of queue workers
        // (looks at horizon)
        // https://discordapp.com/channels/146267795754057729/294067877424660480/510523627746361380

        $baseUrl = env('APP_URL_BASE');
        $mainProfile = Metadata::GetProfile();
        $branches = Metadata::keyFilter('branch');

        // Get current Hostname
        $hostname = app(\Hyn\Tenancy\Environment::class)->hostname();

        // Loop through the branches and insert the data into them real time.
        foreach ($branches as &$branch) {
            $value = json_decode($branch->value);
            $name = strtolower(explode('.', $hostname->fqdn, 2)[0] . '_' . trim($value->branchUrl) . '.' . $baseUrl);
            $uuid = DB::connection('system')->select('select w.uuid from hostnames h inner join websites w on h.website_id = w.id where fqdn = :name', ['name' => $name]){0}->uuid;

            $pdo = DB::connection('system')->getPdo();
            \Log::info(json_encode($pdo));

            //\Log::info($uuid);

            // \Log::info($name);
            // \Log::info($mainProfile);
        }

       // \Log::info($branches);

        //$attr = json_decode(DB::connection('system')->table("hostnames")->where('fqdn', '=', 'andela_ikeja.erp.dev')->get());
        //\Log::info($attr);
    }
}
