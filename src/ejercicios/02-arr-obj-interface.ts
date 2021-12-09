/*
    ===== Código de TypeScript =====
*/
let habilidades: String[] = ['Bash','Counter','Healing'];

interface Personaje {
    nombre: String;
    hp: number;
    habilidades: String[];
    puebloNatal?: String;
}

const personaje: Personaje ={
    nombre:'Strider',
    hp: 100,
    habilidades:['bash','Counter','Healing'] 

} 
personaje.puebloNatal  ='pruebo Paleta'

console.table(personaje);