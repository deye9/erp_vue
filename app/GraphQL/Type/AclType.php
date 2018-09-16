<?php

namespace App\GraphQL\Type;

use App\Models\Role;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;

class AclType extends BaseType
{
    protected $attributes = [
        'name' => 'Available Roles',
        'description' => 'Get all available Roles'
    ];

    public function fields()
    { // Roles, Permissions, Users
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
            ],

            // Nested Resource
            'permissions' => [
                'args' => [
                    'id' => [
                        'type' => Type::int(),
                    ],
                    'first' => [
                        'type' => Type::int(),
                    ],
                ],
                'type' => Type::listOf(GraphQL::type('Permissions'))
            ]
        ];
    }

    protected function resolveCreatedAtField($root, $args)
    {
      return (string) $root->created_at;
    }

    protected function resolveUpdatedAtField($root, $args)
    {
      return (string) $root->updated_at;
    }
}
