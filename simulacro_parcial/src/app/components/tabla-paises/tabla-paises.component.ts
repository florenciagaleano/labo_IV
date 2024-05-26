import { Component, EventEmitter, Output } from '@angular/core';
import { Pais } from '../../models/pais';
import { PaisesService } from '../../services/paises-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css',
})
export class TablaPaisesComponent {
  paises = [
    'argentina',
    'united kingdom',
    'uruguay',
    'united states',
    'germany',
    'colombia',
  ];
  @Output() paisSeleccionado = new EventEmitter<string>();
    paisesInfo: Pais[] = [];
  constructor(private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.paises.forEach((pais) => {
      this.paisesService.obtenerPais(pais).subscribe((data) => {
        this.paisesInfo.push(data);
      });
    });
  }

  seleccionarPais(nacionalidadSeleccionada: string): void {
    this.paisSeleccionado.emit(nacionalidadSeleccionada);
  }

}
