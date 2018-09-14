<?php

namespace App\GraphQL\Query;

use GraphQL;
use App\Models\User;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;

class UsersQuery extends Query
{
    protected $attributes = [
        'name' => 'Users Query',
        'description' => 'A query of users'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('User'));
    }

    public function args()
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::int()
            ],
            'email' => [
                'name' => 'email',
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

        if(isset($args['email']))
        {
            $user = $user->where('email', $args['email']);
        }

        return $user->get();

    }
}
