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
    Schema::create('finance_accounts', function (Blueprint $table) {
      $table->id();
      $table->string('name');
      $table->text('description');
      $table->timestamps();
    });

    Schema::create('finance_transactions', function (Blueprint $table) {
      $table->id();
      $table->foreignId('finance_account_id')->references('id')->on('finance_accounts');
      $table->foreignId('committee_id')->references('id')->on('committee'); // who did the transaction
      $table->foreignId('rt_id')->references('id')->on('rts');
      $table->decimal('amount', 14, 2);
      $table->string('type');
      $table->date('date');
      $table->text('description');
      $table->timestamps();

    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('finances_accounts');
    Schema::dropIfExists('finance_transactions');
  }
};
