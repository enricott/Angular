
/*
    ===== Código de TypeScript =====
*/
/*  FORMA TEDIOSA 
class PersonaNormal {
    nombre: String;
    direccion: String;

    constructor( nombre:String, direccion: String ){
        this.nombre = nombre;
         this.direccion = direccion;
    }
}
*/
class PersonaNormal {

    constructor( 
        public nombre: String,
        public direccion: String 
    ) {}
}

class Heroe extends PersonaNormal {

    constructor (
        public alterEgo: String ,
        public edad: number,
        public nombreReal: String
    ) {
        super( nombreReal, 'New York, USA');
    }

}

const ironman = new Heroe('Ironman',45,'Tony');

console.log(ironman);