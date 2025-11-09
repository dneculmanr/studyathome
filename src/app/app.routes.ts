import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./pages/calendario/calendario.page').then(m => m.CalendarioPage)
  },
  {
    path: 'resumen',
    loadComponent: () => import('./pages/resumen/resumen.page').then(m => m.ResumenPage)
  }
];
