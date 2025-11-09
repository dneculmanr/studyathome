import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {

  user = {
    usuario: '',
    password: ''
  };

  constructor(private router: Router) {}

  ingresar() {
    if (this.user.usuario.trim() !== '' && this.user.password.trim() !== '') {
      localStorage.setItem('usuario', this.user.usuario);
      localStorage.setItem('password', this.user.password);
      this.router.navigate(['/calendario']);
    } else {
      alert('Debes ingresar usuario y contraseña.');
    }
  }

}
