<?php

namespace App\Http\Controllers\api;

use GraphQL;
use GraphQL\Schema;
use App\GraphQL\Type;
use App\GraphQL\Query;
use Illuminate\Http\Request;
use GraphQL\GraphQL as Graph;
use App\Http\Controllers\Controller;

class GraphQLController extends Controller
{
    protected $tag = 'GraphQL Controller ';

    public function Queries(Request $request) {
        // Log::info($request->all());
        // Log::info($request->input());
        // Log::info(json_decode($request->getContent(), true));

        \Log::info($this->getAuthUser());

        $query = $request->input('query');
        $schema = GraphQL::schema();
        $result = Graph::execute($schema, $query);
        return response()->json($result);
    }

    public function Mutations(Request $request) {
        $query = $request->input('mutations');
        $schema = GraphQL::schema();
        $result = Graph::execute($schema, $query);
        return response()->json($result);
    }

    public function Subscriptions(Request $request) {
        $query = $request->input('subscriptions');
        $schema = GraphQL::schema();
        $result = Graph::execute($schema, $query);
        return response()->json($result);
    }

}
