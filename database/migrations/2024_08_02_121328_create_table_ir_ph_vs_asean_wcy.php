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
        Schema::create('indicator_rankings_ph_vs_asean', function (Blueprint $table) {
            $table->id();
            $table->string('indicator_ranking');
            $table->string('year');
            $table->string('country');
            $table->string('count');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('indicator_rankings_ph_vs_asean');
    }
};
