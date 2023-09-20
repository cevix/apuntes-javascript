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
     var colores = new Array("rojo","verde","azul");
     return colores;
}

console.log(ejercicio3());

//4-Añade "amarillo" al final del array colores utilizando el método push().

var colores=ejercicio3();

function ejercicio4(colores){
    
    colores.push("amarillo");
    return  colores;

}


//5-Escribe un bucle for que recorra cada elemento del array colores y los imprima en la consola. Usa todos los tipos de for que hemos visto

var colores=ejercicio4(colores);

function recorrerArrayfor(colores){
    
    for (let element = 0; element < colores.length; element++) {
        console.log(colores[element]);  
    }
}
console.log("recorrido de un array con for:")
recorrerArrayfor(colores);

console.log("recorrido de un array con while: ")
function recorrerArraywhile(colores){
    
    var elemento=0;
    while(elemento<=(colores.length-1)){
        console.log(colores[elemento])
        elemento++;
    }
}
recorrerArraywhile(colores);

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
        return libros;
}
console.log(arrayLibros());

//15-Escribe una función que acepte el array de libros y devuelva el libro más reciente (el de mayor añoDePublicacion).

//16-Escribe una función llamada suma que acepte un array de números y devuelva su suma.
var numeros=[4,6,8,3,20];
function suma(numeros){
    var sumaTotal=0;
    for (let i = 0; i <numeros.length ; i++) {
        sumaTotal+=numeros[i];
}
return sumaTotal;
}

console.log(suma(numeros));

//17-Escribe una función invertir que acepte una cadena y devuelva la cadena invertida (p.ej., invertir("Hola") debe devolver "aloH").

var cadena="Hola";
function invertir(cadena){
    var palabraSeparadas=cadena.split("");
    var invertido=palabraSeparadas.reverse();
    var palabraInvertida=invertido.join("");

    return palabraInvertida;

};

console.log(invertir(cadena));




/* 18-Escribe una función esPalindromo que acepte una cadena y devuelva true si la cadena es un palíndromo (se lee igual hacia adelante y hacia atrás) 
y false en caso contrario.*/
var palabra="iti";
function esPalindromo(palabra){
    var separar=palabra.split("");
    var invertir=separar.reverse();
    var juntar=invertir.join("");
    if(juntar==palabra){
        return "es palindromo"
    }else{
        return"no es palindromo"
    }

}

console.log(esPalindromo(palabra));

//19-Escribe una función que acepte dos cadenas y devuelva true si la segunda cadena es una subcadena de la primera, y false en caso contrario.
