import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guard/ingresado.guard';
import { NoIngresadoGuard } from './guard/noingresado.guard';
import { IngresadoGuardP } from './guard/ingresado-p.guard';
import { NoIngresadoGuardP } from './guard/noingresado-p.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'recupera',
    loadChildren: () => import('./recupera/recupera.module').then( m => m.RecuperaPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'login-p',
    loadChildren: () => import('./login-p/login-p.module').then( m => m.LoginPPageModule),
    canActivate: [NoIngresadoGuardP]
  },
  {
    path: 'inicio-p',
    loadChildren: () => import('./inicio-p/inicio-p.module').then( m => m.InicioPPageModule),
    canActivate: [IngresadoGuardP]
  },
  {
    path: 'registro-p',
    loadChildren: () => import('./registro-p/registro-p.module').then( m => m.RegistroPPageModule),
    canActivate: [NoIngresadoGuardP]
  },
  {
    path: 'recupera-p',
    loadChildren: () => import('./recupera-p/recupera-p.module').then( m => m.RecuperaPPageModule),
    canActivate: [NoIngresadoGuardP]
  },
  
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
