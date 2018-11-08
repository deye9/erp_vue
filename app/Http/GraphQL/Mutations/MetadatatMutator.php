<?php

namespace App\Http\GraphQL\Mutations;

use App\Models\User;
use App\Models\Tenant;
use App\Models\Metadata;
use App\Notifications\TenantCreated;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class MetadatatMutator
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
                if (isset($hostname))
                {
                    // Get FQDN (Fully-Qualified Domain Name) by current hostname
                    $fqdn = $hostname->fqdn;
                    $FQDN = explode('.', $fqdn, 2);

                    $name = $FQDN[0] . '_' . $value->branchUrl;
                    if (Tenant::tenantExists($name)) {
                        \Log::info("A tenant with name '{$name}' already exists.");
                        return $meta;
                    }

                    $tenant = Tenant::registerTenant($name, $email, $password);

                    // Invite Admin
                    $tenant->admin->notify(new TenantCreated($tenant->hostname));
                }
            } else {
                throw new \GraphQL\Error\Error("Tenant URL '{$value->branchUrl}' already exists.");
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
        // $decodeString = json_encode($branches->value);
        // $decodeString = preg_replace("/]([^]]+)$/", ', ' . $args['input']['value'] . ']', $decodeString);
        // \Log::info($decodeString);
        // $branches->value = $decodeString;
        // $branches::save();
        // //$officeBranches = $branches->value;
        // return $branches;
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
        $meta = Metadata::find($args['input']['id'])->delete();
        \Log::info($meta);
        return $meta;
    }
}
