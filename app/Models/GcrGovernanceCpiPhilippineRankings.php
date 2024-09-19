<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GcrGovernanceCpiPhilippineRankings extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'report_name',
        'source',
        'area_block',
        'rank',
        'baseline_economies',
        'year',
        'rank_in_asean',
        'remarks'
    ];
}
