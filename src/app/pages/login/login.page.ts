import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class LoginPage {

  usuario: string = "";
  password: string = "";

  constructor(private router: Router) {}

  ingresar() {
    if (this.usuario.trim() && this.password.trim()) {

      localStorage.setItem("usuarioActivo", this.usuario);

      this.router.navigate(['/calendario']);

    } else {
      alert("⚠️ Ingresa usuario y contraseña");
    }
  }
}