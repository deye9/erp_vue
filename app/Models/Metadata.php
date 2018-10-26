<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;
use Hyn\Tenancy\Traits\UsesTenantConnection;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Metadata extends Model implements Auditable
{
    use UsesTenantConnection, \OwenIt\Auditing\Auditable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
    */
    protected $fillable = [ 'key', 'value', ];

    /**
     * Attributes to include in the Audit.
     *
     * @var array
    */
    protected $auditInclude = [ 'key', 'value', ];

    public static function IsProfileValid()
    {
        return false;
    }
}
