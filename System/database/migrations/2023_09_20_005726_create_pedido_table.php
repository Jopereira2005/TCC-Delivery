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
        Schema::create('Pedidos', function (Blueprint $table) {
            $table->id('id');
            $table->float('valor_total');
            $table->float('valor_com_desconto')->nullable();
            $table->dateTime('data_pedido');
            $table->dateTime('data_entrega');
            $table->dateTime('data_pagamento');
            $table->string('endereco');
            $table->enum('status_pedido', ['pronto', 'em entrega', 'cancelado', 'em espera']);
            $table->enum('forma_pagamento', ['crédito', 'dinheiro', 'pix', 'débito']);
            $table->unsignedBigInteger('cod_cliente');
            $table->unsignedBigInteger('cod_funcionario');
            $table->unsignedBigInteger('cod_endereco')->nullable();
            $table->unsignedBigInteger('cod_cupom')->nullable();

            $table->foreign('cod_cliente')->references('id')->on('Clientes');
            $table->foreign('cod_funcionario')->references('id')->on('Funcionarios');
            $table->foreign('cod_endereco')->references('id')->on('Enderecos');
            $table->foreign('cod_cupom')->references('id')->on('Cupons');
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
        Schema::dropIfExists(table: 'Pedidos');
    }
};
