import { Component } from '@angular/core';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';
import { Pelicula } from '../../models/pelicula';
import { DetallePeliculaComponent } from '../detalle-pelicula/detalle-pelicula.component';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [TablaPeliculaComponent,DetallePeliculaComponent],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  peliculaSeleccionada: Pelicula | null = null;

  actualizarDetalle(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
    console.log(this.peliculaSeleccionada);
  }

}
