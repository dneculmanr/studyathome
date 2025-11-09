import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


import { RouterModule } from '@angular/router';


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
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
})
export class CalendarioPage {

  fechaSeleccionada: any;
  materia: string = "";
  descripcion: string = "";

  // Aquí guardaremos los recordatorios
  recordatorios: { fecha: string; materia: string; descripcion: string }[] = [];

  constructor(private router: Router) {}


  agregarRecordatorio() {
  if (this.fechaSeleccionada && this.materia.trim() !== "" && this.descripcion.trim() !== "") {

    const nuevo = {
      fecha: new Date(this.fechaSeleccionada).toLocaleDateString(),
      materia: this.materia,
      descripcion: this.descripcion
    };

    this.recordatorios.push(nuevo);

    // ✅ Guardar el último recordatorio
    localStorage.setItem("ultimoRecordatorio", JSON.stringify(nuevo));

    // ✅ Limpiar campos
    this.materia = "";
    this.descripcion = "";
    this.fechaSeleccionada = null;

    // ✅ Navegar a Resumen
    this.router.navigate(['/resumen']);

  } else {
    alert("⚠️ Por favor completa todos los campos antes de guardar.");
  }
}

}
