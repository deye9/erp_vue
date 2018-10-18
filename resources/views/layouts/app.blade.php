<?php
    use Carbon\Carbon;
?>

<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="robots" content="all,follow">
    <meta name="keywords" content="SaaS, ERP, SME">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="SAAS ERP for SME's">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui shrink-to-fit=no">
    <title>{{ config('app.name', 'Welcome to ERP') }}</title>
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    @yield('styles')
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
</head>

<body>

    <div class="wrapper">

        <nav class="navbar navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="{{ url('/') }}">
                <img src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" height="30px" width="30px" class="d-inline-block align-top" alt="Brand Image" title="Brand Image" />
                {{ config('app.name', ' ') }}
            </a>
            <ul class="nav navbar-nav justify-content-end">
                <li class="nav-item">
                    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#ModalSignup">
                        <span> Sign up </span>
                    </button>
                    {{-- <a id="sidebarCollapse" href="#" class="nav-link">
                        Sign up
                    </a> --}}
                </li>
            </ul>
        </nav>

        @yield('content')

        <br /><br />
        <footer class="fixed-bottom">
            <div class="container">
                <div>
                    <span class="text-muted"> &copy {{ Carbon::now()->year }}</span>
                    <a href="#">Terms of use</a>
                    |
                    <a href="#">Privacy</a>
                    |
                    <a href="#"> Authentic Items</a>
                </div>
            </div>
        </footer>

        <!-- Modal -->
        <div class="modal fade" id="ModalSignup" tabindex="-1" role="dialog" aria-labelledby="ModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h5 class="modal-title" style="color:#fff;" id="ModalTitle"> Create an Account </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="inputEmail4">Your Name</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon2">{{'@'.env('TENANCY_DEFAULT_HOSTNAME')}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="email">Email Address</label>
                                <input type="email" class="form-control" id="email" placeholder="Email">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="confirmEmail">Confirm Email</label>
                                <input type="email" class="form-control" id="confirmEmail" placeholder="Confirm Email">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Email">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="confirmPassword">Confirm Password</label>
                                <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password">
                            </div>
                        </div>
                        <div class="form-group checkbox">
                            <input id="AgreementCheckbox" type="checkbox">
                            <label for="AgreementCheckbox">I agree to the terms and conditions.</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary"> Sign Me Up </button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- <script src="{{ asset('js/app.js') }}"></script> --}}
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
    <script>
        $(document).ready(function()
        {

        });
    </script>
    @yield('scripts')

</body>

</html>
