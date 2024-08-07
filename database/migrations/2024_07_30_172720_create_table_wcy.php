<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('world_competitiveness_ranking', function (Blueprint $table) {
            $table->id();
            $table->string('wcy_country');
            $table->string('wcy_count');
            $table->string('wcy_year');
            $table->string('wcy_economy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('world_competitiveness_ranking');
    }
};
