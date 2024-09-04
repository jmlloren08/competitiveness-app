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
        Schema::create('gcr_general_wcy_ph_ranks', function (Blueprint $table) {
            $table->id();
            $table->string('report_name');
            $table->string('source');
            $table->string('area_block');
            $table->integer('rank');
            $table->integer('baseline_economies');
            $table->string('year');
            $table->string('rank_in_asean');
            $table->string('remarks');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_general_wcy_ph_ranks');
    }
};
