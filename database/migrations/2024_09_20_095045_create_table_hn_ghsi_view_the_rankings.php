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
        Schema::create('gcr_hn_ghsi_view_the_rankings', function (Blueprint $table) {
            $table->id();
            $table->string('ghsi_country');
            $table->string('ghsi_count');
            $table->string('ghsi_year');
            $table->string('ghsi_economy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_hn_ghsi_view_the_rankings');
    }
};
