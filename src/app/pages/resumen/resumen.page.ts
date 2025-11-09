import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// ✅ Lottie
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

@Component({
  selector: 'app-resumen',
  standalone: true,
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
  imports: [CommonModule, IonicModule, LottieComponent],
  providers: [
    provideLottieOptions({
      player: () => player,
    }),
  ],
})
export class ResumenPage {

  usuario: string = "Invitado";
  ultimoRecordatorio: any = null;

  animacion = {
    path: 'assets/lottie/study.json',
    loop: true,
    autoplay: true
  };

  constructor() {
    const rec = localStorage.getItem("ultimoRecordatorio");
    if (rec) this.ultimoRecordatorio = JSON.parse(rec);

    const user = localStorage.getItem("usuarioActivo");
    if (user) this.usuario = user;
  }

}
