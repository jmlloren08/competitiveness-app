<?php

namespace App\Filament\Clusters;

use Filament\Clusters\Cluster;

class WGIndicators extends Cluster
{
    protected static ?string $navigationLabel = 'WG Indicators';
    protected static ?string $clusterBreadcrumb = 'WG Indicators';
    protected static ?string $navigationGroup = 'Governance';
    protected static ?string $navigationIcon = '/backend/assets/images/icon-wgi.png';
    protected static ?int $navigationSort = 4;
}
