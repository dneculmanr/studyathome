import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, LottieComponent],
  providers: [
    provideLottieOptions({
      player: () => player,
    }),
  ],
})
export class LoginPage {
  usuario: string = "";
  password: string = "";

  animacion = {
    path: 'assets/lottie/login.json',
    loop: true,
    autoplay: true
  };

  constructor(private router: Router) {}

  ingresar() {

    // ✅ Validación simple
    if (this.usuario.trim() === "" || this.password.trim() === "") {
      alert("⚠️ Debes ingresar un usuario y una contraseña.");
      return;
    }

    // ✅ Guardar datos para después mostrarlos en Resumen
    localStorage.setItem("usuarioActivo", this.usuario);
    localStorage.setItem("passwordActivo", this.password);

    // ✅ Ir al menú después de iniciar sesión
    this.router.navigate(['/menu']);
  }
}
