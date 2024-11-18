import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-inicio-p',
  templateUrl: './inicio-p.page.html',
  styleUrls: ['./inicio-p.page.scss'],
})
export class InicioPPage implements OnInit {



  constructor(public navCtrl : NavController,
    public alertController: AlertController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }


  
  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Esta seguro desea salir de la aplicacion?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.navCtrl.navigateRoot('inicio-p');
          }
        },
        {
          text: 'Salir',
          role: 'confirm',
          handler: () => {
            localStorage.removeItem('ingresadoP');
            this.navCtrl.navigateRoot('login-p');
          }
        }
      ]
    });
    await alert.present();
    //localStorage.removeItem('ingresadoP');
    //this.navCtrl.navigateRoot('login-p');
    };

    name(){
      var usuarioP = localStorage.getItem('nombreP');
      return usuarioP}


async mensajeA(){
  
  await this.cargando();

  const alert = await this.alertController.create({
  header: 'QR Arquitectura',
  message: '<img src="/assets/img/qrcode_chrome.png" />',
  buttons: ['Aceptar'],
});
await alert.present();}

async mensajeC(){

  await this.cargando();

  const alert = await this.alertController.create({
  header: 'QR Calidad de Software',
  message: '<img src="/assets/img/qrcode_chrome2.png" />',
  buttons: ['Aceptar'],
});
await alert.present();}



async mensajeP(){
  
  await this.cargando();

  const alert = await this.alertController.create({
  header: 'QR Programacion Moviles',
  message: '<img src="/assets/img/qrcode_chrome3.png" />',
  buttons: ['Aceptar'],
});
await alert.present();}



  async cargando() {
    const loading = await this.loadingCtrl.create({
      message: 'Generando QR de Asignatura',
      duration: 500,
    });
    await loading.present();
    await loading.onDidDismiss();
  }






}
