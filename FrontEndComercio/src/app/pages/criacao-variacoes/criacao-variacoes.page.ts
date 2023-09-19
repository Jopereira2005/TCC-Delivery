import { Component, OnInit } from '@angular/core';
import { GrupoVariacoes } from 'src/app/core/interfaces/grupo-variacoes';

@Component({
  selector: 'app-criacao-variacoes',
  templateUrl: './criacao-variacoes.page.html',
  styleUrls: ['./criacao-variacoes.page.scss'],
})
export class CriacaoVariacoesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  produtoSelecionado: string = 'Marmita';
  grupoVariacao: string = '';

  produtoSelecionadoSelect(e: any) {
    this.produtoSelecionado = e.detail.value;
  }
  grupoVariacaoSelecionada(e: any) {
    this.grupoVariacao = e.detail.value;
  }

  criarFormularoProduto: GrupoVariacoes[] = [
    {
      tipo: 'Arroz',
      variacoes: [
        {
          nome: 'Arroz',
          descricao: 'arroz branco cozido',
          valor_desconto: 5,
          valor_inicial: 10,
          valor_final: 5,
          imagem: '../../..',
        },
        {
          nome: 'A grega',
          descricao: 'arroz branco cozido',
          valor_desconto: 5,
          valor_inicial: 10,
          valor_final: 5,
          imagem: '../../..',
        },
        {
          nome: 'Integral',
          descricao: 'arroz branco cozido',
          valor_desconto: 5,
          valor_inicial: 10,
          valor_final: 5,
          imagem: '../../..',
        },
      ],
    },

    {
      tipo: 'Feijão',
      variacoes: [
        {
          nome: 'Arroz',
          descricao: 'arroz branco cozido',
          valor_desconto: 5,
          valor_inicial: 10,
          valor_final: 5,
          imagem: '../../..',
        },
      ],
    },

    {
      tipo: 'Tamanho',
      variacoes: [
        {
          nome: 'Arroz',
          descricao: 'arroz branco cozido',
          valor_desconto: 5,
          valor_inicial: 10,
          valor_final: 5,
          imagem: '../../..',
        },
      ],
    },

  ]
}
