<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GcrDigitalWdcrIndicatorRankings extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'wdcr_country',
        'wdcr_count',
        'wdcr_year',
        'wdcr_economy'
    ];
}
