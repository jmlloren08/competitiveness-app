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
        Schema::create('gcr_eti_wtr_indicator_rankings', function (Blueprint $table) {
            $table->id();
            $table->string('indicator_ranking');
            $table->string('years');
            $table->integer('country_id');
            $table->string('country');
            $table->string('counts');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_eti_wtr_indicator_rankings');
    }
};
