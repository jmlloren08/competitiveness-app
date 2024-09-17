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
        Schema::create('gcr_eti_gii_view_the_rankings', function (Blueprint $table) {
            $table->id();
            $table->string('gii_country');
            $table->string('gii_count');
            $table->string('gii_year');
            $table->string('gii_economy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_eti_gii_view_the_rankings');
    }
};
