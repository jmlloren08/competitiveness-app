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
        Schema::create('digital_wdcr_indicator_rankings', function (Blueprint $table) {
            $table->id();
            $table->string('wdcr_country');
            $table->string('wdcr_count');
            $table->string('wdcr_year');
            $table->string('wdcr_economy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('digital_wdcr_indicator_rankings');
    }
};
