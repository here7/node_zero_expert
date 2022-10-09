const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre(){
        return `${ this.nombre } ${ this.apellido } ${ this.poder }` 
    }
}

// Extraction of data, old method
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

//Extraction of data = desestructuracion
// const { nombre, apellido, poder, edad = 0 } = deadpool;
// console.log(nombre, apellido, poder, edad);


//Desestructuracion en function traditional
function imprimeHeroe( {nombre, apellido, poder, edad = 0} ){
    //const { nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool);


// Desestructuracion arrays
const heroes = ['Deadpool', 'Superman', 'Batman'];

// Metodo tradicional

/* 
const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];
*/

// Metodo desestructuracion
const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);