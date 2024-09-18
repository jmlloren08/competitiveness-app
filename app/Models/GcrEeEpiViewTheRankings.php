<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GcrEeEpiViewTheRankings extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'ee_epi_country',
        'ee_epi_count',
        'ee_epi_year',
        'ee_epi_economy'
    ];
}
