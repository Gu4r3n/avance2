import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.page.html',
  styleUrls: ['./recupera.page.scss'],
})
export class RecuperaPage implements OnInit {

  recuperacion: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl : NavController,
    private storage: Storage
  ) { 
    this.recuperacion = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'rut' : new FormControl("",Validators.required),
      'gmail' : new FormControl ("",Validators.required)
    })

}


  async ngOnInit() { await this.storage.create();
  }

  async recuperar() {
    var f = this.recuperacion.value;
    var usuario = await this.storage.get('usuario');
      if (usuario.nombre == f.nombre && usuario.rut == f.rut && usuario.gmail == f.gmail) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');

        const alert = await this.alertController.create({
          header: 'Por favor recordar contraseña',
          message: 'su contraseña es '+usuario.password,
          buttons: ['Aceptar'],
        });
        await alert.present();

        this.navCtrl.navigateRoot('inicio');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos No existentes',
          message: 'Su nombre no aparece en los registros',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
   
  }


}
