<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;
use Hyn\Tenancy\Traits\UsesTenantConnection;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Metadata extends Model implements Auditable
{
    use \OwenIt\Auditing\Auditable, UsesTenantConnection;

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
        $res = Metadata::where('key', '=', 'Company Profile')->exists();
        return ($res == 1) ? true : false;
    }

    public static function GetProfile() {
        // Remember to check for null just in case it fails.
       return Metadata::whereRaw("lower(key) = lower('Company Profile')")->first();
    }

    public static function GetBranches() {
        // Remember to check for null just in case it fails.
       return Metadata::whereRaw("lower(key) = lower('BRANCH')")->first();
    }

    public static function getBranch($branchName) {
        return Metadata::where('value->branchName', '=', $branchName)->first();
    }

    public static function branchExists($branchName): string {
        $res = Metadata::where('value->branchName', '=', $branchName)->exists();
        return (boolval($res) ? 'true' : 'false');
    }

    public static function branchUrlExists($branchUrl): string {
        $res = Metadata::where('value->branchUrl', '=', $branchUrl)->exists();
        return (boolval($res) ? 'true' : 'false');
    }

    public function keyFilter() {
        \Log::info(12);
    }
}
