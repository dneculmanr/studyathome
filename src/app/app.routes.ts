import { Routes } from '@angular/router';

export const routes: Routes = [
  // Página inicial -> Login
  {
    path: '',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },

  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },

  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then(m => m.MenuPage)
  },

  {
    path: 'calendario',
    loadComponent: () => import('./pages/calendario/calendario.page').then(m => m.CalendarioPage)
  },

  {
    path: 'asignaturas',
    loadComponent: () => import('./pages/asignaturas/asignaturas.page').then(m => m.AsignaturasPage)
  },

  {
    path: 'resumen',
    loadComponent: () => import('./pages/resumen/resumen.page').then(m => m.ResumenPage)
  },
];

