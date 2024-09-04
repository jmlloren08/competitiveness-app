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
        Schema::create('gcr_general_wcy_ir_ph_vs_aseans', function (Blueprint $table) {
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
        Schema::dropIfExists('gcr_general_wcy_ir_ph_vs_aseans');
    }
};
