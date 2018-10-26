<?php

namespace App\GraphQL\Query;

use GraphQL;
use App\Models\Metadata;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;

class MetadataQuery extends Query
{
    protected $attributes = [
        'name' => 'Metadata Query',
        'description' => 'A query for Metadata'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Metadata'));
    }

    public function args()
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::int()
            ],
            'key' => [
                'name' => 'key',
                'type' => Type::string()
            ],
            'first' => [
                'name' => 'first',
                'type' => Type::int()
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $user = new User;

        // check for limit
        if( isset($args['first']) ) {
            $user =  $user->limit($args['first'])->latest('id');
        }

        if(isset($args['id']))
        {
            $user = $user->where('id' , $args['id']);
        }

        if(isset($args['key']))
        {
            $user = $user->where('key', $args['key']);
        }

        return $user->get();

    }
}
