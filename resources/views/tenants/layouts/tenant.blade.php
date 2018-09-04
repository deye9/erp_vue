<?php
    use Carbon\Carbon;
?>

<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="SchoolERP is a Google Material Design inspired ERP built with PHP, Laravel, Vue and Vuetify.">
    <meta name="keywords" content="admin, dashboard, webapp, erp, responsive, material, bootstrap, uikit, framework, backend, app, widgets, premium, file manamger, mail, vue, vuetify, echarts">
    <title>{{ config('app.name', 'Welcome to School ERP') }}</title>
    <link rel="shortcut icon" href="/static/m.png" type="image/x-icon">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons' rel="stylesheet">
    <!-- <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
    @yield('styles')-->
</head>

<body>
    @yield('content')

    @yield('scripts')
</body>

</html>
