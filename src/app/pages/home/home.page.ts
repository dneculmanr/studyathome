import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// ✅ Lottie
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, LottieComponent],
  providers: [
    provideLottieOptions({
      player: () => player,
    }),
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  animacion = {
    path: 'assets/lottie/welcome.json', 
    loop: true,
    autoplay: true
  };

  irALogin() {
    this.router.navigate(['/login']);
  }
}
