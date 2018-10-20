<?php

namespace App\Http\Controllers\api;

use App\Models\Tenant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Notifications\TenantCreated;
// use App\Traits\AuthValidationTrait;

class ValidateController extends Controller
{
    protected $tag = 'API Validations';

    /**
     * Register the new School and redirect the user to the confirmation page.
     *
     * @return A valid JSON Object.
    */
    public function register(Request $request) {
        try
        {
            $email = $request->input('email');
            $password = $request->input('password');
            $abbreviation = $request->input('abbreviation');

            // Validate the request.
            $validator = $this->registerTenant($request->all());

            if ($validator->fails())
            {
                $msg = $this::ERROR_CREATING_TENANT . " [{$abbreviation}].";
                Log::info('[ ' . $this->tag . '::New Tenant Registration Error]: ' . json_encode($validator->failed()));

                return $this->jsonResponse([
                    'status' => "Error",
                    'message' => $msg,
                    'data' => $validator->failed()
                ], $this::BAD_REQUEST);
            }

            if (Tenant::tenantExists($abbreviation)) {
                $msg = "{$abbreviation} already exists. " . $this::NAME_UNAVAILABLE;
                Log::error("[ " . $this->tag . '::Tenant Registration ]: ' . $msg);

                return $this->jsonResponse([
                    'status' => "Error",
                    'message' => $msg
                ], $this::BAD_REQUEST);
            }

            // Create the Tenant as requested.
            $tenant = Tenant::registerTenant($abbreviation, $email, $password);

            // Make a call to register the URL with CloudFlare if need be.

            // Invite admin
            $tenant->admin->notify(new TenantCreated($tenant->hostname));

            // Build out the message for the end user.
            $msg = nl2br("Hi, {$email} \r\n\r\n");
            $msg .= nl2br("Your Company <strong>" . strtoupper($abbreviation) . "</strong> has been successfully registered and is now accessible via https://{$tenant->hostname->fqdn}.\r\n\r\n");
            $msg .= nl2br("Admin {$email} has also been invited!\r\n\r\n");
            $msg .= nl2br("Do remember to share this url https://{$tenant->hostname->fqdn} with all people who need to access the application.\r\n\r\n");
            $msg .= nl2br("Also do not forget to setup access rights for all parties.\r\n\r\n");

            return $this->jsonResponse([
                'message' => $msg,
                'status' => 'Success',
                'url' => 'https://' .$tenant->hostname->fqdn
            ], $this::OK);
        }
        catch (Exception $e) {
            Log::error($this->tag . '::Tenant Registration Failed ' . $e->getMessage());
            return $this->jsonResponse([
                'status' => 'Error',
                'message' => $e->getMessage()
            ], $this::INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Confirm if the proposed Company name is available for usage.
     *
     * @return A valid Json Object.
    */
    public function isavailable($name)
    {
        try
        {
            if (empty(trim($name))) {
                return $this->jsonResponse([
                    'err_status' => 'Error',
                    'err_message' => 'Invalid Name specified.'
                ], $this::BAD_REQUEST);
            }

            if (!preg_match("/^([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/",$name)) {
                return $this->jsonResponse([
                    'err_status' => 'Error',
                    'err_message' => 'Invalid Name specified.'
                ], $this::BAD_REQUEST);
            }

            if (Tenant::tenantExists($name)) {
                $msg = "{$name} already exists. " . $this::NAME_UNAVAILABLE;
                Log::error("[ " . $this->tag . '::Is HostName Available ]: ' . $msg);

                return $this->jsonResponse([
                    'status' => "Error",
                    'message' => $msg
                ], $this::BAD_REQUEST);
            }

            return $this->jsonResponse([
                'status' => 'Success',
                'message' => $this::NAME_AVAILABLE
            ], $this::OK);
        }
        catch (Exception $e) {
            Log::error($this->tag . '::Error checking availability of Name ' . $e->getMessage());
            return $this->jsonResponse([
                'status' => 'Error',
                'message' => $e->getMessage()
            ], $this::INTERNAL_SERVER_ERROR);
        }
    }
}
