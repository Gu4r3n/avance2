import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-recupera-p',
  templateUrl: './recupera-p.page.html',
  styleUrls: ['./recupera-p.page.scss'],
})
export class RecuperaPPage implements OnInit {

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
    var usuarioP = await this.storage.get('usuarioP');
      if (usuarioP.nombre == f.nombre && usuarioP.rut == f.rut && usuarioP.gmail == f.gmail) {
        console.log('IngresadoP');
        localStorage.setItem('ingresadoP', 'true');

        const alert = await this.alertController.create({
          header: 'Por favor recordar contraseña',
          message: 'su contraseña es '+usuarioP.password,
          buttons: ['Aceptar'],
        });
        await alert.present();

        this.navCtrl.navigateRoot('inicio-p');
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
