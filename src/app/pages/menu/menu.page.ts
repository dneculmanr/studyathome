import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [CommonModule, IonicModule, LottieComponent],
  providers: [
    provideLottieOptions({
      player: () => player,
    }),
  ]
})
export class MenuPage {

  usuario: string = "Invitado";

  animacionMenu = {
    path: 'assets/lottie/menu.json',
    loop: true,
    autoplay: true
  };

  constructor(private router: Router) {}


  ionViewWillEnter() {
    const user = localStorage.getItem("usuarioActivo");
    this.usuario = user ? user : "Invitado";
  }

  irCalendario() { this.router.navigate(['/calendario']); }
  irResumen() { this.router.navigate(['/resumen']); }
  irAsignaturas() { this.router.navigate(['/asignaturas']); }

  cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    localStorage.removeItem("passwordActivo");
    this.router.navigate(['/login']);
  }
}

