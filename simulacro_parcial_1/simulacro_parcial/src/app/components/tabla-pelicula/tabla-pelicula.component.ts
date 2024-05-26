import { Component, EventEmitter, Output } from '@angular/core';
import { Genero, Pelicula } from '../../models/pelicula';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css'
})
export class TablaPeliculaComponent {
  @Output() peliculaSeleccionada = new EventEmitter<Pelicula>();
  vista = 'grilla';
  peliculas: Pelicula[] = [
    new Pelicula(1, 'La La Land', Genero.Amor, new Date('2016-12-09'), 500000, 'la-la-land.jpg'),
    new Pelicula(2, 'Monty Python and the Holy Grail', Genero.Comedia, new Date('1975-03-14'), 800000, 'monty-python.jpg'),
  ];
  selectedPeliculaId: number | null = null;

  cambiarVista(vista: string) {
    this.vista = vista;
  }

  seleccionarPelicula(pelicula: Pelicula) {
    this.selectedPeliculaId = pelicula.id;
    this.peliculaSeleccionada.emit(pelicula);
  }
}
