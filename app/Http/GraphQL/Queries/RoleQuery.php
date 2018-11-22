<?php

namespace App\Http\GraphQL\Queries;

use App\Models\Role;
use Illuminate\Database\Eloquent\Model;
use GraphQL\Type\Definition\ResolveInfo;
use App\Traits\UserAuthTrait as userData;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class RoleQuery
{
    use userData;

    /**
     * Return a value for the field.
     *
     * @param null $rootValue Usually contains the result returned from the parent field. In this case, it is always `null`.
     * @param array $args The arguments that were passed into the field.
     * @param GraphQLContext|null $context Arbitrary data that is shared between all fields of a single query.
     * @param ResolveInfo $resolveInfo Information about the query itself, such as the execution state, the field name, path to the field from the root, and more.
     *
     * @return mixed
     */
    public function roles($rootValue, array $args, GraphQLContext $context = null, ResolveInfo $resolveInfo)
    {
        // Get the currently authenticated user...
        $user = $this->getAuthUser();
        if ($this->getAuthUser()['statusCode'] === 200) {
            $user = $user['user'];
        } else {
            return response()->json([
                'error' => $this->getAuthUser()['error'],
                'statusCode' => (int)401
            ], 401);
        }

        \Log::info($user->email);



    }
}
