<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use App\Models\Metadata;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use GraphQL\Type\Definition\ResolveInfo;

class createMetadataMutation extends Mutation
{
    protected $attributes = [
        'name' => 'Create Metadata Mutation',
        'description' => 'A mutation'
    ];

    public function type()
    {
        return GraphQL::type('Metadata');
    }

    public function args()
    {
        return [
            'name' => [
                'name' => 'key',
                'type' => Type::string()
            ],
            'value' => [
                'name' => 'value',
                'type' => Type::string(),
            ],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {

        \Log::info($args);
        return Metadata::create($args);

        // return [
        //     'id' => 0,
        //     'key' => $args['key'],
        //     'value' => $args['value']
        // ];
    }
}

// mutation {
//     createMetadata(key: "Testing", value: "sdsdf") {
//       key
//       value
//     }
//   }