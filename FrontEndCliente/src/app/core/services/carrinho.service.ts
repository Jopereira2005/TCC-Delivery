import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  constructor(private Server: ServerService) {}

  public removerProduto(id: number) {
    return this.Server.delete(`/cliente/carrinho/delete/${id}`);
  }
  // q porra é essa marreco?
  public produtos(cod_cliente: Number) {
    return this.Server.get(`pedido/carrinho/${cod_cliente}`);
  }

  public adicionarProduto(produto: Produto) {
    return console.log("produto produto a adicionar no carrinho", produto)
    return this.Server.put(`/cliente/carrinho/adicionar`, produto)
  }

}
