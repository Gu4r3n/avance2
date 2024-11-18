import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
  
  async ngOnInit() { await this.storage.create(); this.getWeather('Santiago'); 
  }


  async ingresar() {
    var f = this.formularioLogin.value;
    var usuario= await this.storage.get('usuario'); //await this.storage.get('usuario') importar storage y poner en contructor, ver si necesito el JSON
      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('nombre',usuario.nombre)
        localStorage.setItem('ingresado', 'true');
        this.navCtrl.navigateRoot('inicio');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'No coinciden los datos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    
  }






//quizas sea necesario el JSON

  /*async ingresar() {
    var f = this.formularioLogin.value;
    var usuarioString = localStorage.getItem('usuario'); //await this.storage.get('usuario') importar storage y poner en contructor, ver si necesito el JSON
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.navCtrl.navigateRoot('inicio');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'No coinciden los datos',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      // Manejo de caso cuando no se encuentra el valor en localStorage
    }
  }*/
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
