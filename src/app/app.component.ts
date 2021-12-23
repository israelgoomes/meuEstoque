import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { configHelper } from './configurations/configHelper';
import { LoginService } from './services/login-service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  onUser: any;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Produtos',
      url: '/products',
      icon: 'file-tray-stacked'
    },
    {
      title: 'Vendas',
      url: '/sales',
      icon: 'pricetags'
    },
    {
      title: 'Fornecedor',
      url: '/provider',
      icon: 'cube'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'trending-up'
    },
    {
      title: 'Sair',
      url: '/',
      icon: 'exit'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginSrvc: LoginService,
    private menuCtrl: MenuController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.onUser = JSON.parse(localStorage.getItem(configHelper.storageKeys.user))
    console.log('Compania logada', this.onUser)
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  teste(i) {
    if (i == 4) {
      this.loginSrvc.logout();
      this.menuCtrl.enable(false);
      //this.router.navigate(['/login'])
    }
  }
}
