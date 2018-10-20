<?php

namespace App\Http\Controllers\Tenants;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DefaultController extends Controller
{
    public function getTenantName()
    {
        // Get current Hostname
        $hostname = app(\Hyn\Tenancy\Environment::class)->hostname();

        if (isset($hostname)) {
            // Get FQDN (Fully-Qualified Domain Name) by current hostname
            $fqdn = $hostname->fqdn;

            return $fqdn;
        } else
        {
            return '';
        }
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
    */
    public function index()
    {
        $data = [];
        $data['name'] = 'Andela';
        $data['catch_phase'] = 'When brilliance and opportunity meet';
        $data['logo'] = 'https://media.cdn.gradconnection.com/uploads/c4aa0069-1948-440f-bace-0792744eea59-andela_logo.png';
        return view(($this->getTenantName() === '') ? 'welcome' : 'tenants.welcome', ['tenant' => $data]);
    }
}
