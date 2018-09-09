<?php

namespace App\GraphQL\Type;

use App\Models\Role;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;
use GraphQL;

class RolesType extends BaseType
{
    protected $attributes = [
        'name' => 'AvailableRoles',
        'description' => 'A type'
    ];

    public function fields()
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

    protected function resolveCreatedAtField($root, $args)
    {
      return (string) $root->created_at;
    }

    protected function resolveUpdatedAtField($root, $args)
    {
      return (string) $root->updated_at;
    }
}
