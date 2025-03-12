<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GcrGovernanceWgiGePhilippineRankings extends Model
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

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->report_name)) {
                $model->report_name = 'WGI - Government Effectiveness'; // Set default value
            }
        });
    }
}
