/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe{
    nombre:string;
    edad: number,
    direccion: {
        calle: String;
        pais: String;
        ciudad: String;
    },
    mostrarDireccion: () => String;
    
}


const SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion:{
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ' , ' + this.direccion.ciudad + ' , ' + this.direccion.pais;
    }
}
    const direccion = SuperHeroe.mostrarDireccion();
    console.log( direccion );
