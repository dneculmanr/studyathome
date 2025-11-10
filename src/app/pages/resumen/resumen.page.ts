import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-resumen',
  standalone: true,
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    LottieComponent
  ],
})
export class ResumenPage {

  usuario: string = "Invitado";
  password: string = "****";
  recordatorios: any[] = [];

  animacion = {
    path: 'assets/lottie/study.json',
    loop: true,
    autoplay: true
  };

  constructor() {

    // ✅ Recuperar usuario y contraseña
    const user = localStorage.getItem("usuarioActivo");
    const pass = localStorage.getItem("passwordActivo");
    
    if (user) this.usuario = user;
    if (pass) this.password = pass;

    // ✅ Recuperar recordatorios
    const data = localStorage.getItem("recordatorios");
    if (data) this.recordatorios = JSON.parse(data);
  }
}
