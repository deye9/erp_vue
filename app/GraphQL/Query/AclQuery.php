<?php

namespace App\GraphQL\Query;

use GraphQL;
use App\Models\Role;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;

class AclQuery extends Query
{
    protected $attributes = [
        'name' => 'RolesQuery',
        'description' => 'A query to get all roles setup in the database alongside the permissions granted per role.'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Roles'));
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

    protected function resolveCreatedAtField($root, $args)
    {
        return (string) $root->created_at;
    }

    protected function resolveUpdatedAtField($root, $args)
    {
        return (string) $root->updated_at ?? ' ';
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $roles = Role::all();

        if(isset($args['id'])) {
            $roles = Role::findByID($args['id'])->permissions->all();
        }

        if(isset($args['name'])) {
            $roles = Role::findByName($args['name'])->permissions;
        }

        // Check for Permissions based on Role ID
        foreach ($roles as $field => $keys) {
            $roles->permissions = $roles->find($keys->id)->permissions->all();
        }

        return $roles;
    }
}
