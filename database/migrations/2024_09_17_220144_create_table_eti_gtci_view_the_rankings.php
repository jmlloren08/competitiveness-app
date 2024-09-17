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
        Schema::create('gcr_eti_gtci_view_the_rankings', function (Blueprint $table) {
            $table->id();
            $table->string('gtci_country');
            $table->string('gtci_count');
            $table->string('gtci_year');
            $table->string('gtci_economy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_eti_gtci_view_the_rankings');
    }
};
