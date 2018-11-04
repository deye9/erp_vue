<?php

namespace App\Http\GraphQL\Mutations;

use App\Models\Metadata;
use GraphQL\Type\Definition\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class MetadatatMutator {

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
    public function create($rootValue, array $args, GraphQLContext $context = null, ResolveInfo $resolveInfo)
    {
        if (strtolower($args['input']['key']) !== 'branch') {
            $meta = Metadata::create($args['input']);
        } else {
            $data = \App\Models\Metadata::GetBranches();

            if (is_null($data)) {
                $meta = Metadata::create($args['input']);
            } else {
                $meta = null;
                \Log::info($args);
                // $data = json_decode($data['value']);
                // \Log::info(json_decode($data['value']));
            }

        }

        return $meta;
    }
}
