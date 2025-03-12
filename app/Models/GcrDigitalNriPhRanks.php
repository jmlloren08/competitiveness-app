<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GcrDigitalNriPhRanks extends Model
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

     /**
     * Automatically assign a default value for report_name if not provided.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->report_name)) {
                $model->report_name = 'Network Readiness Index'; // Set default value
            }
        });
    }
}
