<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GcrDigitalEgdiPhVsAseans extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'egdi_country',
        'egdi_count',
        'egdi_year',
        'egdi_economy'
    ];
}
