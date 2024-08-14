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
        Schema::create('gcr_digital_ictdi_ph_vs_ranks', function (Blueprint $table) {
            $table->id();
            $table->string('ictdi_country');
            $table->string('ictdi_count');
            $table->string('ictdi_year');
            $table->string('ictdi_economy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_digital_ictdi_ph_vs_ranks');
    }
};
