import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cupom } from 'src/app/core/interfaces/cupom';
import { CuponsService } from 'src/app/core/services/cupons.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'src/app/core/controller/toast.service';

@Component({
  selector: 'app-form-cupom',
  templateUrl: './form-cupom.component.html',
  styleUrls: ['./form-cupom.component.scss'],
})
export class FormCupomComponent  implements OnInit {

  @Input() cupom?: any;
  @Input() editar?: boolean;

  @Output() emitirCupom: any = new EventEmitter

  @ViewChild('formCupom') private formCupom!: NgForm;


  constructor( private Cupom: CuponsService, private Toast: ToastService) { }

  ngOnInit() {
  }

  erros: any = {};
  loading: boolean = false;

  enviarCupom() {
    const data = this.formCupom.form.value;

    this.editar
      ? this.atualizar()
      : this.adicionar(data);
  }

  atualizar(){

  }

  adicionar(data:any){
    data.porcentagem_desconto = Number(data.porcentagem_desconto).toFixed(2)
    this.Cupom.adicionarCupom(data).subscribe(
      (response: any) => {
        if (response.created_at) {
          const tipo = 'sucesso';
          const mensagem =  'Cadastro realizado com sucesso';

          this.Toast.mostrarToast(tipo, mensagem);
        }
        this.loading = false;
      },
      (badReponse: HttpErrorResponse) => {
        const error = Object.entries(badReponse.error);
        this.erros = {};

        for (const [chave, valor] of error) this.erros[chave] = valor;
        this.loading = false;
      }
    )
  }
}
