<?php

namespace App\GraphQL\Query;

use GraphQL;
use JWTAuth;
use Exception;
use JWTFactory;
use Carbon\Carbon;
use App\Models\User;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use GraphQL\Type\Definition\ResolveInfo;
use App\Helpers\Constants as HelperConstants;

class UserLoginQuery extends Query
{

    protected $attributes = [
        'name' => 'User Login Query',
        'description' => 'A query to login the user and get the needed Token'
    ];

    public function type()
    {
        return GraphQL::type('User');
    }

    public function args()
    {
        return [
            'email' => [
                'type' => Type::string()
            ],
            'password' => [
                'type' => Type::string()
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        //\Log::info(json_encode($args));
        $user = User::where('email', $args['email'])->first();
        try {
            $token = JWTAuth::fromUser($user, [
                'exp' => Carbon::now()->addWeek()->timestamp,
            ]);
        } catch (JWTException $e) {
            return $this->error($e, HelperConstants::USER_LOGIN_ERROR);
        }

        if (!$token) {
            return response()->json([
                'Credentials' => HelperConstants::USER_LOGIN_ERROR
            ]);
        } else {
            $user['token'] = $token;
            return $user;
        }
    }
}
