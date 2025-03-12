<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GcrGeneralWcyIrPhVsAseanss extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'indicator_ranking',
        'years',
        'country',
        'counts'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (!$model->country_id && $model->country) {
                $model->country_id = \App\Models\GcrGeneralWcyIrPhVsAseanss::where('country', $model->country)
                    ->value('country_id');
            }
        });
    }
}
