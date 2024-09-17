<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GcrEtiGiiIndicatorRankings extends Model
{
    use HasFactory;

    protected $fillable = [
        'indicator_ranking',
        'years',
        'country_id',
        'country',
        'counts'
    ];
}
