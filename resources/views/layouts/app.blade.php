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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet" type="text/css">
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
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">
                        Sign up
                    </a>
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

    </div>

    {{-- <script src="{{ asset('js/app.js') }}"></script> --}}
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
    <script>
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        var js_schoolerp = {
            toastType : {
                Info: 'info',
                Error: 'error',
                Success: 'success',
                Warning: 'warning'
            },
            toastTitle: 'School ERP Notification Service'
        };
        function Notify(toastType, toastMessage) {
            toastr[toastType](toastMessage, js_schoolerp.toastTitle);
        }
    </script>
    @yield('scripts')

</body>

</html>
