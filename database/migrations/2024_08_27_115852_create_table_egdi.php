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
        Schema::create('gcr_digital_egdi_ph_vs_ranks', function (Blueprint $table) {
            $table->id();
            $table->string('egdi_country');
            $table->string('egdi_count');
            $table->string('egdi_year');
            $table->string('egdi_economy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_digital_egdi_ph_vs_ranks');
    }
};
