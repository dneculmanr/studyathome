import { Routes } from '@angular/router';

export const routes: Routes = [

  // Página inicial → Login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  // Login
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },

  // Calendario
  {
    path: 'calendario',
    loadComponent: () =>
      import('./pages/calendario/calendario.page').then((m) => m.CalendarioPage),
  },

  // Resumen
  {
    path: 'resumen',
    loadComponent: () =>
      import('./pages/resumen/resumen.page').then((m) => m.ResumenPage),
  },

  // Home no se usará por ahora, pero lo dejamos por si lo necesitas
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },

];
