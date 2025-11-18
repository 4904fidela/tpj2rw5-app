<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('committee', function (Blueprint $table) {
      $table->id();
      $table->foreignId('resident_id')->references('id')->on('residents');
      $table->foreignId('position_id')->references('id')->on('positions');
      $table->foreignId('rt_id')->references('id')->on('rts');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('committee');
  }
};
