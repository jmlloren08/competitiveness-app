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
        Schema::create('phranks', function (Blueprint $table) {
            $table->id();
            $table->string('report_name');
            $table->string('source');
            $table->string('area_block');
            $table->string('rank');
            $table->string('baseline_economies');
            $table->string('year');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phranks');
    }
};
