<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Philippine Global Competitiveness Report Card. The Report Card presents the rankings of the Philippines in major international competitiveness reports. The key objective of this collaboration is the development of a comprehensive “competitiveness dashboard”. This dashboard will serve as an integrated platform designed to monitor and analyze various aspects of the country’s competitiveness. It will offer a centralized view of key data and performance metrics, enabling stakeholders to make informed decisions and implement strategies for enhancing competitiveness.">
    <title inertia>{{ config('app.name', '') }}</title>
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>