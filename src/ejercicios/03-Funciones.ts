/*
    ===== Código de TypeScript =====
*/


function sumar(a: number ,b:number):number{
    return (a+b);
}

const sumarFecha= (a:number,b:number):number =>{
    return a+b
} 

function multiplicar (numero:number, otronumero?: number, base:number =2): number {
    return numero * base
}

/*
const resultado = multiplicar(5,10);
console.log(resultado);
*/

interface PersonajeLOR {
    nombre: String;
    pv: number;
    mostarHP: () => void;
}

function curar( personaje: PersonajeLOR , curarX: number): void{

    personaje.pv += curarX;
    
} 

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostarHP() {
        console.log('Puntos de vida:', this.pv);
    }
}

curar ( nuevoPersonaje,20 )

nuevoPersonaje.mostarHP();