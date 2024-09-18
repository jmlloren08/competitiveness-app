<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GcrEeEtiViewTheRankings extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'ee_eti_country',
        'ee_eti_count',
        'ee_eti_year',
        'ee_eti_economy'
    ];
}
