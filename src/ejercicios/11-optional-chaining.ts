interface Pasajero {
    nombre: String;
    hijos ?: String[]
}

const pasajero1: Pasajero={
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'melissa',
    hijos: ['Natalia','Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantoshijos = pasajero.hijos?.length || 0;

    console.log(cuantoshijos);
}

imprimeHijos(pasajero1)