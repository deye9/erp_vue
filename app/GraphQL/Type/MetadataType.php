<?php

namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as BaseType;

class MetadataType extends BaseType
{
    protected $attributes = [
        'name' => 'Metadata',
        'description' => 'Handles all metadata definations for the applocation.'
    ];

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the user.'
            ],
            'key' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The type / category of the Metadata.'
            ],
            'value' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The value of the Metadata to be created.'
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'Metadata creation datetime.'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'Metadata updated datetime.'
            ],
        ];
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
