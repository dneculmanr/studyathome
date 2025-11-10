import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calendario',
  standalone: true,
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    LottieComponent
  ],
  providers: [
    provideLottieOptions({
      player: () => player,
    }),
  ]
})
export class CalendarioPage {

  fechaSeleccionada: any = null;
  materia: string = "";
  descripcion: string = "";
  recordatorios: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const data = localStorage.getItem("recordatorios");
    if (data) this.recordatorios = JSON.parse(data);
  }

  guardarRecordatorio() {
    if (!this.fechaSeleccionada || !this.materia.trim() || !this.descripcion.trim()) {
      alert("⚠️ Completa todos los campos.");
      return;
      
    }

    const nuevo = {
      fecha: new Date(this.fechaSeleccionada).toLocaleDateString(),
      materia: this.materia,
      descripcion: this.descripcion
    };

    this.recordatorios.push(nuevo);
    localStorage.setItem("recordatorios", JSON.stringify(this.recordatorios));

    this.materia = "";
    this.descripcion = "";
    this.fechaSeleccionada = null;
  }


  borrarRecordatorio(index: number) {
    this.recordatorios.splice(index, 1);
    localStorage.setItem("recordatorios", JSON.stringify(this.recordatorios));
  }

  irAResumen() {
    this.router.navigate(['/resumen']);
  }

  volverMenu() {
  this.router.navigate(['/menu']);
}

  animacion = {
    path: 'assets/lottie/calendar.json',
    loop: true,
    autoplay: true
  };
}

