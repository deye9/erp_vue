<?php

namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

class PermissionsType extends BaseType
{
    protected $attributes = [
        'name' => 'Permissions Type',
        'description' => 'Gets all permissions associated with selected Role.'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the Permission'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string())
            ],
            'title' => [
                'type' => Type::nonNull(Type::string())
            ],
            'group' => [
                'type' => Type::nonNull(Type::string())
            ],
            'icon' => [
                'type' => Type::nonNull(Type::string())
            ],
            'target' => [
                'type' => Type::string()
            ],
            'component' => [
                'type' => Type::nonNull(Type::string())
            ],
            'created_at' => [
                'type' => Type::string()
            ],
            'updated_at' => [
                'type' => Type::string()
            ],
        ];
    }

    protected function resolveComponentField($root, $args)
    {
      return (string) $root->component;
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
