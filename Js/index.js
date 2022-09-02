class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }

    getFullName(){
        console.log(`El nombre completo es ${this.nombre} ${this.apellido}`);
    }

    addMascota(nombreMascota){
        this.mascotas = [];

        nombreMascota.forEach((e)=>{
            this.mascotas.push(e)
        })
        console.log(`Las mascotas de ${this.nombre} son ${this.mascotas}`);
    }

    countMascotas(){
        console.log(`${this.nombre} tiene ${this.mascotas.length} mascotas`);
    }

    addBook(arrayLibros){
        this.libros = arrayLibros;   
        console.log(this.libros);
    }

    getBookNames(){
        const arrayNombres = [];
        this.libros.forEach((e)=>{
            arrayNombres.push(e.nombre)});
        
        console.log( `los nombres de los libros son ${arrayNombres}`);
        
    }
}

let usuario1 = new Usuario("Rodrigo", "Depaul");

let libros = [{nombre:'libro1', autor:'autor1'},{nombre:'libro2', autor:'autor2'},{nombre:'libro3', autor:'autor3'}];

let mascot = ['perro', 'gato', 'delfin'];

usuario1.getFullName();

usuario1.addMascota(mascot);

usuario1.countMascotas();

usuario1.addBook(libros);
usuario1.getBookNames();




