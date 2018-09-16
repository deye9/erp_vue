<?php

namespace App\GraphQL\Query;

use GraphQL;
use App\Models\Role;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;

class PermissionsQuery extends Query
{
    protected $attributes = [
        'name' => 'Permissions Query',
        'description' => 'A query to get all permissions associated with a Role.'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Permissions'));
    }

    public function args()
    {
        return [
            'id' => [
                'type' => Type::int(),
                'description' => 'The id of the Role'
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'The name of the Role'
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $permissions = Role::all();

        if(isset($args['id'])) {
            $permissions = Role::findByID($args['id'])->permissions->all();
        }

        if(isset($args['name'])) {
            $permissions = Role::findByName($args['name'])->permissions->all();
        }

        return $permissions;
    }
}
