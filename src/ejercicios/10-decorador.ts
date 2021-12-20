function classDecorator <T extends {new (...args: any []): {} }>(
    constructor: T
){
    return class extends constructor {
        newProperties = "new property";
        hello = "Override";
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: String = 'ABC123';

    imprimit() {
        console.log('Hola Mubdo')
    }
}

console.log( MiSuperClase )

const miClase = new MiSuperClase();
