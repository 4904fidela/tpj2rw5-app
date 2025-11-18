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
    Schema::create('residents', function (Blueprint $table) {
      $table->id();
      $table->foreignId('rt_id')->references('id')->on('rts');
      $table->string('nik')->unique();
      $table->string('kk')->unique();
      $table->string('name');
      $table->string('gender');
      $table->date('birth_date');
      $table->string('birth_place');
      $table->string('address');
      $table->string('marital_status');
      $table->string('religion');
      $table->string('education');
      $table->string('occupation');
      $table->timestamps();

    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('residents');
  }
};
