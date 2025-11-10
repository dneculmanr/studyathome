import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, LottieComponent],
  providers: [
    provideLottieOptions({
      player: () => player,
    }),
  ],
})
export class AsignaturasPage {

  nuevaAsignatura: string = "";
  asignaturas: string[] = [];

  constructor(private router: Router) {}

  animacionAsignaturas = {
    path: 'assets/lottie/books.json', 
    loop: true,
    autoplay: true
  };

  ngOnInit() {
    const guardado = localStorage.getItem("asignaturas");
    if (guardado) this.asignaturas = JSON.parse(guardado);
  }

  agregarAsignatura() {
    if (!this.nuevaAsignatura.trim()) return;

    this.asignaturas.push(this.nuevaAsignatura.trim());
    localStorage.setItem("asignaturas", JSON.stringify(this.asignaturas));
    this.nuevaAsignatura = "";
  }

  eliminarAsignatura(i: number) {
    this.asignaturas.splice(i, 1);
    localStorage.setItem("asignaturas", JSON.stringify(this.asignaturas));
  }

  volverMenu() {
    this.router.navigate(['/menu']); 
  }

}
