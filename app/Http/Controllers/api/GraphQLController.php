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

    public function GraphQueries(Request $request) {
        // Log::info($request->all());
        // Log::info($request->input());
        // Log::info(json_decode($request->getContent(), true));
        $query = $request->input('query');
        $schema = GraphQL::schema();
        $result = Graph::execute($schema, $query);
        return response()->json($result);
    }

    public function GraphMutations(Request $request) {

    }

}
