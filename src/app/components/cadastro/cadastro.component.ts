import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { CadastroService } from '../../services/cadastro-service/cadastro.service';
import { SpinnerService } from '../../services/spinner-service/spinner.service';
import { AlertService } from '../../services/alert-service/alert-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  @Output() result = new EventEmitter;

  cadastroForm: FormGroup
  constructor(private fb: FormBuilder,
    private cadastroSrvc: CadastroService,
    private spinnerSrvc: SpinnerService,
    private alertSrvc: AlertService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nmEmpresa: ['', Validators.required],
      email: ['', Validators.required],
      cnpjCpf: ['', Validators.required],
      password: ['', Validators.required],
      senhaConfirmacao: ['', Validators.required]
    }, { validator: CadastroComponent.equalsTo })
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const password = group.get('password');
    const senhaConfirmacao = group.get('senhaConfirmacao')
    if (!password || !senhaConfirmacao) {
      return undefined
    }

    if (password.value !== senhaConfirmacao.value) {
      return { passwordsNotMatch: true }
    }
    return undefined
  }

  cadastrar() {
    console.log(this.cadastroForm.value)
    this.cadastroSrvc.cadastrar(this.cadastroForm.value).subscribe(response => {
      console.log(response);
      this.spinnerSrvc.hide()
      this.alertSrvc.toast(response.message, 2000, 'top')
      this.result.emit(false)
    }, error => {
      this.spinnerSrvc.hide();
      console.log('Error', error.error.message)
      this.alertSrvc.okAlert("Erro", error.error.validation[0].message)
      this.result.emit(true)
    })
  }

  cancelar() {
    this.result.emit(false);
  }

}
