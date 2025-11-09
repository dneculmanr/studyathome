import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

// Material
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

    // ✅ Angular Material
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,

    // ✅ Permite usar routerLink en el HTML
    RouterModule
  ],
})
export class CalendarioPage {

  fechaSeleccionada: any;
  materia: string = "";
  descripcion: string = "";
  recordatorios: { fecha: string; materia: string; descripcion: string }[] = [];

  constructor(private router: Router) {}

  agregarRecordatorio() {
    if (!this.fechaSeleccionada || !this.materia.trim() || !this.descripcion.trim()) {
      alert("⚠️ Completa todos los campos antes de guardar.");
      return;
    }

    const nuevo = {
      fecha: new Date(this.fechaSeleccionada).toLocaleDateString(),
      materia: this.materia,
      descripcion: this.descripcion
    };

    this.recordatorios.push(nuevo);
    localStorage.setItem("recordatorios", JSON.stringify(this.recordatorios));

    this.fechaSeleccionada = null;
    this.materia = "";
    this.descripcion = "";
  }

}
