import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Cliente } from '../interfaces/cliente';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private Cookie: CookieService, private Server: ServerService) { }

  private readonly token: string = this.Cookie.get('token');
  public readonly logedIn: boolean = !!this.token;

  public cadastro (cliente: Cliente) {
    return this.Server.post('/cliente/cadastrar', cliente);
  }

  public login (cliente: Cliente) {
    return this.Server.post('/cliente/login', cliente);
  }

  public infos () {
    return this.Server.get('/cliente');
  }

  public editar (cliente: Cliente) {
    return this.Server.put('/cliente/editar', cliente);
  }

  private getTokenInfos (): Cliente {
    const parts = this.token.split('.');

    const encodedPayload = parts[1];

    const decodedPayload = atob(encodedPayload);

    return JSON.parse(decodedPayload);
  }
}
