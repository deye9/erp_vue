<?php

namespace App\GraphQL\Query;

use App\Models\Role;
use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use GraphQL;

class RolesQuery extends Query
{
    protected $attributes = [
        'name' => 'RolesQuery',
        'description' => 'A Roles query'
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
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return Role::all();
    }
}
