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
        Schema::create('gcr_eti_wtr_view_the_rankings', function (Blueprint $table) {
            $table->id();
            $table->string('wtr_country');
            $table->string('wtr_count');
            $table->string('wtr_year');
            $table->string('wtr_economy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_eti_wtr_view_the_rankings');
    }
};
