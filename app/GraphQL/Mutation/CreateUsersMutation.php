<?php

namespace App\GraphQL\Mutation;

use GraphQL;
use App\Models\User;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use GraphQL\Type\Definition\ResolveInfo;

class CreateUsersMutation extends Mutation
{
    protected $attributes = [
        'name' => 'Create Users Mutation',
        'description' => 'A mutation to handle the creation of users.'
    ];

    public function type()
    {
        return GraphQL::type('User');
    }

    // public function rules()
    // {
    //     return [
    //         'email' => 'required|email|unique:users',
    //         'name' => 'required|min:2',
    //         'password' => 'required|min:6',
    //         'avatar' => 'url'
    //     ];
    // }

    public function args()
    {
        return [
            'name' => [
                'name' => 'name',
                'type' => Type::string()
            ],
            'email' => [
                'name' => 'email',
                'type' => Type::string(),
                'rules' => ['email', 'unique:users']
            ],
            'password' => [
                'name' => 'password',
                'type' => Type::string(),
                'rules' => ['min:6']
            ],
            'avatar' => ['name' => 'avatar', 'type' => Type::string()],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        return User::create($args);
    }
}
