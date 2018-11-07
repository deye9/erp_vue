<?php

namespace App\Http\GraphQL\Mutations;

use App\Models\Metadata;
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
            // $branches = Metadata::whereRaw("lower(key) = lower('BRANCH')")->first();
            // if (count($branches) <= 0) {
            $meta = Metadata::create(['key' => $args['input']['key'], 'value' => '[' . $args['input']['value'] . ']']);
            // } else {
            //     return $this->UpdateBranchOffice($args, $branches);
            // }
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
    private function UpdateBranchOffice(array $args, Metadata $branches)
    {
        // if (strtolower($args['input']['key']) === 'branch') {
        //     $data = Metadata::whereRaw("lower(key) = lower('BRANCH')")->first();
        //     // if (count($data) >= 1) {
        //     //     $meta = Metadata::create(['key' => $args['input']['key'], 'value' => '[' . $args['input']['value'] . ']']);
        //     // } else {
        //     //     \Log::info($data);
        //     // }
        //     //$meta = Metadata::create(['key' => $args['input']['key'], 'value' => '[' . $args['input']['value'] . ']']);
        // } else {
        //     $meta = Metadata::create($args['input']);
        // }
        // // elseif (strtolower($args['input']['key']) !== 'branch') {
        // //     $data = \App\Models\Metadata::GetBranches();

        // //     if (is_null($data)) {
        // //         $meta = Metadata::create($args['input']);
        // //     } else {
        // //         $meta = 123;
        // //         \Log::info($args);
        // //         // $data = json_decode($data['value']);
        // //         // \Log::info(json_decode($data['value']));
        // //     }
        // // }

        // \Log::info($branches->id);
        // \Log::info($branches->key);
        $decodeString = json_encode($branches->value);
        $decodeString = preg_replace("/]([^]]+)$/", ', ' . $args['input']['value'] . ']', $decodeString);
        \Log::info($decodeString);
        $branches->value = $decodeString;
        $branches::save();
        //$officeBranches = $branches->value;
        return $branches;
    }
}
