import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { configHelper } from '../configurations/configHelper';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service/login.service';
import { MenuController } from '@ionic/angular';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { AlertService } from '../services/alert-service/alert-service.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  isCadastro: boolean = false;

  constructor(
    private menuCtrl: MenuController,
    private loginSrvc: LoginService,
    private route: Router,
    private spinnerSrvc: SpinnerService,
    private alertSrvc: AlertService,
    public fb: Facebook
  ) { }

  ngOnInit() {



    this.menuCtrl.enable(false);
    // if (localStorage.getItem(configHelper.storageKeys.token)) {
    //   console.log('Token carregado');
    //   this.route.navigate(['/products']);
    // }
  }

  login(f: NgForm) {
    console.log(f.value.cnpjCpf);
    this.loginSrvc.authenticate(f.value.cnpjCpf, f.value.password).subscribe(
      (data) => {
        console.log('token enviado', data.token);
        this.loginSrvc.registerLogin(data.token);
        this.loginSrvc.registerUser(JSON.stringify(data.usuario));
        this.spinnerSrvc.hide();
        this.route.navigate(['/products']);
        this.alertSrvc.toast('Login efetuado com sucesso!', 2000, 'top');
        f.reset();
      },
      (error) => {
        console.log('erro', error.error.message);
        console.log('erro orig', error);
        this.spinnerSrvc.hide();
        this.alertSrvc.okAlert('Erro ao efetuar login', error.error.message);
      }
    );
  }

  cadastrar() {
    this.isCadastro = true;
  }

  teste(e) {
    console.log('ENtrou')
    this.isCadastro = e;
  }


  // loginFb() {
  //   this.fb.login(['public_profile', 'email'])
  //     .then((res: FacebookLoginResponse) => {
  //       if (res.status === 'connected') {
  //         // this.user.img = 'http://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square'
  //         this.loginSrvc.teste(res.authResponse.accessToken).subscribe(v => {
  //           console.log('RESPOSYA', v)
  //         })
  //       } else {
  //         alert('Login Failed')
  //       }
  //       console.log('Logged into Facebook!', res)
  //     })
  //     .catch(e => console.log('Error logging into Facebook', e));
  // }

}
