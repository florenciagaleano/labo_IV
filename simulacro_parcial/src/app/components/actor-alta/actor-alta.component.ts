import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Actor } from '../../models/actor';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-actor-alta',
  standalone: true,
  imports: [FormsModule,CommonModule,TablaPaisesComponent],
  templateUrl: './actor-alta.component.html',
  styleUrl: './actor-alta.component.css'
})
export class ActorAltaComponent {
  actor: Actor = new Actor('', '');

  constructor(private firestore : Firestore){}

  altaActor(){
    let col = collection(this.firestore, 'actores');
    addDoc(col, { "nombreCompleto": this.actor.nombreCompleto, "pais": this.actor.pais});

    console.log(this.actor);
  }

  onPaisSeleccionado(nacionalidad: string): void {
    this.actor.pais = nacionalidad;
  }
}
