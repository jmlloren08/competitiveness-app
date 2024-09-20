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
        Schema::create('gcr_hn_ghi_view_the_rankings', function (Blueprint $table) {
            $table->id();
            $table->string('ghi_country');
            $table->string('ghi_count');
            $table->string('ghi_year');
            $table->string('ghi_economy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_hn_ghi_view_the_rankings');
    }
};
