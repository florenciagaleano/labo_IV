export enum Genero{
    Terror = 'Terror',
    Comedia = 'Comedia',
    Amor = 'Amor',
    Otros = 'Otros'
}

export class Pelicula {
    id : number
    nombre : string
    tipo  : Genero
    fechaEstreno : Date 
    cantidadPublico : number
    imagen : string 

    constructor(
        id: number,
        nombre: string,
        tipo: Genero,
        fechaEstreno: Date,
        cantidadPublico: number,
        imagen: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.imagen = imagen;
    }
}
