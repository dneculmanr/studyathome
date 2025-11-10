import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule, IonicModule, LottieComponent],
  providers: [
    provideLottieOptions({ player: () => player })
  ],
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage {
  usuario: string = 'Invitado';
  password: string = '****';
  recordatorios: any[] = [];
  asignaturas: string[] = [];

  constructor(private router: Router) {} 

  animacion = { 
    path: 'assets/lottie/study.json', 
    loop: true, 
    autoplay: true 
  };

  ngOnInit() {
    const u = localStorage.getItem('usuarioActivo');
    if (u) this.usuario = u;

    const p = localStorage.getItem('passwordActivo');
    if (p) this.password = p;

    const r = localStorage.getItem('recordatorios');
    if (r) this.recordatorios = JSON.parse(r);

    const a = localStorage.getItem('asignaturas');
    if (a) this.asignaturas = JSON.parse(a);
  }

  volverMenu() {
    this.router.navigate(['/menu']); 
  }
}
