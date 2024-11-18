import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.page.html',
  styleUrls: ['./login-p.page.scss'],
})


export class LoginPPage implements OnInit {
  weatherData: any;
  formularioLogin: FormGroup;


  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl : NavController,
    private storage: Storage,
    private weatherService: WeatherService

  ) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  async ngOnInit() { await this.storage.create(); this.getWeather('Santiago'); }


  async ingresar() {
    var f = this.formularioLogin.value;
    var usuarioP= await this.storage.get('usuarioP'); //await this.storage.get('usuarioP') importar storage y poner en contructor, ver si necesito el JSON
      if (usuarioP.nombre == f.nombre && usuarioP.password == f.password) {
        console.log('IngresadoP');
        localStorage.setItem('nombreP',usuarioP.nombre)
        localStorage.setItem('ingresadoP', 'true'); //Modificar guard pa profe poner pa profe ingresadoP ingresado normal vre guard
        this.navCtrl.navigateRoot('inicio-p');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'No coinciden los datos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    
  }


  getWeather(city: string) {
    this.weatherService.getWeatherByCity(city).subscribe(
      data => {
        this.weatherData = data;
        console.log(data); // Puedes ver la respuesta en la consola
      },
      error => {
        console.error('Error obteniendo el clima:', error);
      }
    );
  }



}
