import { Producto, calculaISV } from "./06-desectrucutacion-funcion";

/*
    ===== Código de TypeScript =====
*/




const carritosCompras: Producto[] = [
    {
    desc: 'Telefono1',
    precio: 100
    },
    {
    desc: 'Telefono2',
    precio: 150
    },
];

const [total,isv] = calculaISV( carritosCompras);

console.log('Total',total);
console.log('ISV',isv)

