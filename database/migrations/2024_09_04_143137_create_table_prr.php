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
        Schema::create('philippines_reports_rankings', function (Blueprint $table) {
            $table->id();
            $table->integer('gauge_id');
            $table->string('gauge');
            $table->string('category');
            $table->string('report');
            $table->string('source_publisher');
            $table->string('ranks');
            $table->string('remarks');
            $table->string('as_of');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('philippines_reports_rankings');
    }
};
