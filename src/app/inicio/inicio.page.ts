import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint, CapacitorBarcodeScannerTypeHintALLOption } from '@capacitor/barcode-scanner';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  result: string = ''
  
  constructor(public navCtrl : NavController,
    public alertController: AlertController,
    ) {}

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
            this.navCtrl.navigateRoot('inicio');
          }
        },
        {
          text: 'Salir',
          role: 'confirm',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();
    //localStorage.removeItem('ingresado');
    //this.navCtrl.navigateRoot('login');
    };


  /*async mensaje(){const alert = await this.alertController.create({
  header: 'No funcional',
  message: 'Por el momento no se encuentra disponible esta opcion',
  buttons: ['Aceptar'],
});
await alert.present();}*/

name(){
  var usuarioN = localStorage.getItem('nombre');
  return usuarioN}

//dejar solo scan basico ver si despues puedo hacer condicional
/*async scan(): Promise<void> {
  const result = await CapacitorBarcodeScanner.scanBarcode({
    hint: CapacitorBarcodeScannerTypeHint.ALL
  });
  this.result = result.ScanResult;
  }*/

  async scanA(): Promise<void> {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL
    });
    if(result.ScanResult=='Arquitectura|003D|L3|11-11-2024')
      {this.result = result.ScanResult;}
    else{this.result = 'Asignatura no correspondiente'}
    //this.result = result.ScanResult;
  }

  async scanC(): Promise<void> {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL
    });
    if(result.ScanResult=='Calidad Software|001D|L6|11-11-2024')
      {this.result = result.ScanResult;}
    else{this.result = 'Asignatura no correspondiente'}
  }


  async scanP(): Promise<void> {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL
    });
    if(result.ScanResult=='Programacion Movil|005D|L10|11-11-2024')
      {this.result = result.ScanResult;}
    else{this.result = 'Asignatura no correspondiente'}
  }


}
