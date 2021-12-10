/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: String;
    detalles: Detalles
}

interface Detalles {
    autor: String;
    año: number;
} 

const reproducto: Reproductor ={
    volumen: 90,
    segundo: 46,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        año: 2015
    }
}


const {volumen: vol, segundo, cancion, detalles} = reproducto;
// const {volumen, segundo, cancion, detalles:{ autor: autorDetalle } } = reproducto;
const { autor } = detalles;
/*
console.log('El volumen actual de: ', vol)
console.log('El segundo actual de: ', segundo)
console.log('El canción actual de: ', cancion)
console.log('El autor es: ', autor)
 */

const dbz: String[]=['Goku' ,'Vegeta','Trunks'];
//Desctrurizar un arreglo
const [ p1, p2, p3 ] = dbz;


console.log('Personaje 1', p1)
console.log('Personaje 2', p2)
console.log('Personaje 3', p3)

