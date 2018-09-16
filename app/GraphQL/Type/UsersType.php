<?php

namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

class UsersType extends BaseType
{
    protected $attributes = [
        'name' => 'Users',
        'description' => 'A valid User'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the user'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The name of user'
            ],
            'email' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The email of user'
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'Creation datetime'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'Updating datetime'
            ],
            'token' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The token of the user'
            ]
        ];
    }

    protected function resolveEmailField($root, $args)
    {
        return strtolower($root->email);
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
