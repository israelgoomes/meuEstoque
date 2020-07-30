import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertCtrl: AlertController,
              public toastCtrl: ToastController) { }

async okAlert(header, message){
  const alert = await this.alertCtrl.create({
    header,
    message,
    buttons: [
      {
        text: "Ok",
  //        cssClass: "secondary",
        handler: blah => {
        }
      },
    ]
  });
  await alert.present();
}


  async confirm(message, callback: any) {
    const alert = await this.alertCtrl.create({
      header: "Excluir?",
      message,
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Ok",
          handler: () => {
            callback();
          }
        }
      ]
    });
    await alert.present();
  }

  async toast(message: string, duration: number, position) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position    });
    toast.present();
  }
}
