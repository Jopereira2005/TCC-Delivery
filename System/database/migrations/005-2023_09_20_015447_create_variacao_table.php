<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Variacoes', function (Blueprint $table) {
            $table->id('id');
            $table->string('nome');
            $table->unsignedDecimal('porcentagem_desconto', 5, 2)->nullable();
            $table->unsignedDecimal('valor_desconto', 9, 2)->nullable();
            $table->unsignedDecimal('valor_inicial', 9, 2)->default(0);
            $table->string('imagem')->nullable();
            $table->string('descricao');
            $table->unsignedBigInteger('cod_grupo_variacoes');
            $table->foreign('cod_grupo_variacoes')->references('id')->on('Grupo_variacoes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Variacoes');
    }
};
