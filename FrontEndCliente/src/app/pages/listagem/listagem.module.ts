import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemPageRoutingModule } from './listagem-routing.module';

import { ListagemPage } from './listagem.page';
import { FooterModule } from 'src/app/components/common/footer/footer.module';
import { HeaderModule } from 'src/app/components/common/header/header.module';
import { SessaoCardsProdutoModule } from 'src/app/components/common/sessao-cards-produto/sessao-cards-produto.module';
import { ModalMarmitaModule } from 'src/app/components/common/modal-marmita/modal-marmita.module';
import { PesquisaProdutoModule } from 'src/app/components/common/pesquisa-produto/pesquisa-produto.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemPageRoutingModule,
    FooterModule,
    HeaderModule,
    SessaoCardsProdutoModule,
    ModalMarmitaModule,
    PesquisaProdutoModule
  ],
  declarations: [ListagemPage]
})
export class ListagemPageModule {}
