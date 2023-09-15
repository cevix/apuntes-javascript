console.log("hola mundo");
var prueba=true;
/* 
funcion importante -> typeof (variable);


*/

console.log(typeof(prueba)+" concatenamos datos"+" y mas datos");
console.log("1","2");
//debugger
/*
para poner un punto de interrupción y asi poder debugear el codigo ponemos la palabra reservada debugger


*/
//console.log(var2);
//nos da una excepcion de variable no declarada

/*
Para convertir tipos de datos
    parseInt()
    parseFloat()
    añadir un string o un unas comillas dobles o simples
    Boolean()

*/

console.log(parseInt(1))
console.log(parseInt(1.9))

console.log(parseInt("1"))
console.log(parseInt("1.5"))
console.log(parseInt("a"))
/*
ÇEn el booleano define el 1 o 0 de 1 para arriba da true

*/
console.log(Boolean(1))
console.log(Boolean(0))

console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(2))

/*

operadores de comparación

==  compara 2 variables .Si su valor es igual retorna un true.Da igual el tipo de dato
!=  compara 2 variables .Si su valor es diferente retorna un true.Da igual el tipo de dato
===    compara 2 variables .Si su valor y su tipo de dato es igual retorna un true.
!==     compara 2 variables .Si su valor y su tipo de dato no es igual retorna un true.
>=      si la variable de la izq es mayor o igual a la variable de la derecha retorno un true
<=  si la variable de la izq es menor o igual a la variable de la derecha retorno un true
>       si la variable de la izq es mayor  a la variable de la derecha retorno un true
<   si la variable de la izq es menor  a la variable de la derecha retorno un true

operadores aritmetivos
+  suma el valor de la iqz al de la derecha. Retorna el valor resultante
-resta el valor de la izquierda el de la derecha .Retorna el valor restante
*multiplica el valor de la izq  al de la der .Retorna el valor resultante
/ Divide el valorde la izq entre el de la derecha. Retorna el valor resultante
%   Devuelve el resto de dividir el valor de la izq entre el de la derecha
++ suma 1 ala variable
-- Resta 1 a la variable

operadores
=   asigno una variable(izq) un valor(der)
+= Sumo el valor a la variable y lo asigno
-=  Resto el valor a la variable y lo asigno
*= multiplico el valor a la variable y lo asigno
/=  divido el valor a la variable y lo asigno
%=  Calculo el resto del valor a la variable y lo asigno

operadores booleanos
&&   and Evaluamos 2 valores booleanos y devovelmos true cuando todo es true
|| or  Evaluamos 2 valores booleanos y devovelmos true cuando al menos 1 es true
! not  negamos el valor de un booleano

operadores de objetos

new Se usa para instanciar un objeto de una clase
.   Se usa para acceder a las propiadades de un objeto
[]   Se usa para acceder a las propiadades de un objeto cuando el . no es valido
instanceof Se usa para comprobar si un objeto es una instancia de un tipo de objeto
this Se usa Para referenciar un elemto del propio objeto
in Se usapara vereficart si una propiedad exisyte en un objeto
delete Borro una propiedad de un objeto



*/

/*
    Estructura de control
        comprobar condiciones
            comprobar en varias lineas
                if(condicion){
                    parte de verdad
                }else{
                    parte de mentria
                }
            comprobacion de una sola linea
                condicion? parte de verdad: parte falsa
                if(condicion) parte de verdad;else parte falsa;

    bucle while
    while(condicion){
        //Instrucciones a ejecutar mientras que la condicion sea cierta

    }
    bucle do while
    do{

        //Instrucciones a ejecutar mientras que la condicion sea cierta
    }while(condicion)



*/

var lst=[1,2,3,4,5,6]
for (let i = 0; i < lst.length; i++) {
    console.log(lst[i]);
    
}
console.log("---")

lst.forEach(elemento =>{console.log(elemento)
});

var obj = {
    "clave" : "valor",
    "clave1" : "valor1",
    "clave2" : 1,
    "clave3": [1,2,3,"hola",[1,2,3]],
    "clave5" : true
  }

  console.log(obj)
  //para saber una lista de las claves de un objeto
  console.log(Object.keys(obj))
  Object.keys(obj).forEach(clave=> console.log("clave "+clave+" valor "+obj[clave]))
console.log("--------------------------")

//Un bucle for con la palabra in recorre las claves de un objeto
console.log()

  for(var clave in obj){
    console.log(" clave "+clave+" valor "+obj[clave])
  }

  //Un bucle for con la palabra od firve para recorrer los elemtos de un iterable

  for( var num of obj["clave3"]){
    console.log(num)
  }

  function decirHola(){
    return "Hola"
  }

    var fguardada = decirHola()

    console.log(decirHola())

    function decir2(){
        return console.log("hola 2")

    }
    decir2()

    var array =new Array(1,2,3,"hola")
    console.log(array)

    /*
    .length     devuelve la cantidad de elemntos en una array
    .toString()    Devuelve los elementos del array en un string separado por las comas
    .join("separador")     Devuelve los elementos de un array separados por un separador
    .pop()  elimina el ultimo elemento de un array
    .push()     Añade al final de un array un elemento
    .indexOf()  te devuelve el indice de la primera coincidencia . Si no encuentra coincidencias te devuelve un -1
    .includes() para saber si un elemento se encuentra del array
    .every()   para comprobar si todos los elementos de un array cumplen cumplen una condicion 
    .some()     para comprobar si alguno los elementos de un array cumplen cumplen una condicion 
    .find()     devuelve el primer elemento del array que cumple una condicion
    
    lst.every(num=> num%2==0) false
    lst.some((num)=> num%2==2 ) true
    lst.some(num=> num>10) false
    
    lst.every(num=> num>0) false



    4 in lst //esta es para comprobar si esta o no cpon truwe o false
    
    para capturar las excepciones
    try{

    }catch(error){
        en caso de que el codigo de error se ejecuta esta parte
    }finally{
        Este bloque se ejecuta siempre ,salte o no una excepcion
    }

    */

    var personas=[
        {nombre:"Andres",edad:19},
        {nombre:"Diego",edad:22},
        {nombre:"Carlos",edad:56}
    ]
    console.log(personas.find(persona=>persona.edad>30))
    console.log((personas.find(pipi=>pipi.edad>30)).nombre)//se pone que queremos buscar y un atributo del objeto que queremos

   try {
    console.log("fefsefsefse")
   } catch (error) {
    console.log("ha sido el siguiente error",error)
   }finally{
    console.log("Esto se ejecuta siempre")
   }


   /*
   funciones calback

   Estas funciones en JS son elementos que se pasan como parametros a otras funciones y se llaman dentro de esas funciones

   Este tipo de funciones es muy comun en la programación asíncrona.

   La principal carcateristica de una funcion callback es pasada como valor y puede ser llamada por la funcion receptora adecuado

   Las funciones callback suelen ser funciones anónimas o tambien una definida previamente

   ejemplo :
   lst.forEach(function(elemento){
    console.log(elemento)
   })
   lst.forEach(mostrarNumero)
   
   
   */

   /*setInterval(callback,milisegundos) -> ejecuto una funcion cada x milisegundos
   La funcion set interval devuelve un id asociado al intervalo

   setTimeOut(callback, milisegundos) -> ejecuto una función 1 sola vez de despues de x mili segundos


   La funcion setTimeout devuelve un id asociado al timeout

   clearInterval(idInterval)-> para la ejecucion de un intervalo
   clearTimeout(idTimeout)-> previene la ejecución de un time out

    para detener la ejecucion del programa hasta que ele usuario pulse sobre el boton
alert("hola")
   Para mostar al usuario ua venta de confirmacion .Detiene el programa.Devuelve true


   clear interval
    */
   /*
   var lst2=[12,3,4,7,5]
   Array.prototype.saludar=function(){console.log("hola")}
   lst2.saludar()
*/var fecha=new Date()
fecha
Date.prototype.sumarFecha=function(){};