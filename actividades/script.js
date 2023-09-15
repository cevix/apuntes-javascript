//1-Crea una variable llamada nombre y asígnale tu nombre como una cadena.

function ejercicio1(){
    var nombre="alex";

    return console.log(nombre," ha llegado a casa");

}

ejercicio1();

//2-Escribe una función llamada saludo que acepte un parámetro nombre y que devuelva la cadena "Hola, " seguida del nombre proporcionado.
function saludo(nombre){
    return console.log("Hola ,",nombre);

}
saludo("alex");

//3-Crea un array llamado colores que contenga las cadenas 

function ejercicio3(){
     var array = new Array("rojo","verde","azul");
     return console.log(array);
}

ejercicio3();

//4-Añade "amarillo" al final del array colores utilizando el método push().

function ejercicio4(){
    var array = new Array("rojo","verde","azul")
    array.push("amarillo");
    return  console.log(array);

}
ejercicio4()

//5-Escribe un bucle for que recorra cada elemento del array colores y los imprima en la consola. Usa todos los tipos de for que hemos visto

function recorrerArrayfor(){
    var array = new Array("rojo","verde","azul","amarillo");
    for (let element = 0; element < array.length; element++) {
        console.log(array[element]);  
    }
}
console.log("recorrido de un array con for:")
recorrerArrayfor();

console.log("recorrido de un array con while: ")
function recorrerArraywhile(){
    var array = new Array("rojo","verde","azul","amarillo");
    var elemento=0;
    while(elemento<=(array.length-1)){
        console.log(array[elemento])
        elemento++;
    }
}
recorrerArraywhile();

//6-Escribe una función llamada multiplica que acepte dos números como parámetros y devuelva su producto.
function multiplica(a,b){

    var resultado = a*b ;
    return console.log(resultado);
}
multiplica(2,3)

//7-Crea un objeto llamado coche que tenga las propiedades marca, modelo y año, y asígnales valores apropiados.

function objetoCoche(){
    var coche={
    "marca":"nissan",
    "modelo":"juke",
    "año":2019
}
return coche;
}






//14-Crea un array de objetos, donde cada objeto represente un libro y tenga propiedades para titulo, autor y añoDePublicacion.
function arrayLibros(){
    var libros=new Array(
        {
        "titulo":"habitos atomicos",
        "autor":"James Clear",
        "añoDePublicacion":2018   
        },
        {
        "titulo":"Las 48 leyes del poder",
        "autor":"Robert Greene",
        "añoDePublicacion":1998
        },
        {
        "titulo":"Los 7 hábitos de la gente altamente efectiva",
        "autor":" Stephen R. Covey",
        "añoDePublicacion":2011
        }
        )
        return console.log(libros);
}
arrayLibros();

//15-Escribe una función que acepte el array de libros y devuelva el libro más reciente (el de mayor añoDePublicacion).

//16-Escribe una función llamada suma que acepte un array de números y devuelva su suma.
 
