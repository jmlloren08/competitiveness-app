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
        Schema::create('gcr_ee_epi_view_the_rankings', function (Blueprint $table) {
            $table->id();
            $table->string('ee_epi_country');
            $table->string('ee_epi_count');
            $table->string('ee_epi_year');
            $table->string('ee_epi_economy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_ee_epi_view_the_rankings');
    }
};
