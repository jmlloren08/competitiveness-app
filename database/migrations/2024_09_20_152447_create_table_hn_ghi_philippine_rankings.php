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
        Schema::create('gcr_hn_ghi_philippine_rankings', function (Blueprint $gcr) {
            $gcr->id();
            $gcr->string('report_name');
            $gcr->string('source');
            $gcr->string('area_block');
            $gcr->integer('rank');
            $gcr->integer('baseline_economies');
            $gcr->string('year');
            $gcr->string('rank_in_asean');
            $gcr->string('remarks');
            $gcr->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gcr_hn_ghi_philippine_rankings');
    }
};
