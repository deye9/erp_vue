<?php

namespace App\GraphQL\Mutation;

use Folklore\GraphQL\Support\Mutation;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL;

class CreateRolesMutation extends Mutation
{
    protected $attributes = [
        'name' => 'CreateRolesMutation',
        'description' => 'A mutation to create Roles.'
    ];

    public function type()
    {
        return Type::listOf(Type::string());
    }

    public function args()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the Role'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The name of the Role'
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'Date a was created'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'Date a was updated'
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return [];
        // $user = new User();
        // $user->fill($args);
        // $user->save();
        // return $user;
    }
}
