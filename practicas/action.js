function hola(){

    return "hola"

}
console.log(hola());

function suma(a,b){
    var suma=a+b;
    return  suma;
}
console.log(suma(3,2))

function resta(a,b){
var rest=a-b;
return   console.log(rest) ;

}
resta(5,2)

function multiplicacion(a,b){
    var mult=a*b;
    return    console.log(mult);

}

multiplicacion(3,2)

function division(a,b){
    var div=a/b;
    return console.log(div)
}
division(10,2)

function condicion1(num){
    return num==2?  "el numero es dos" :"el numero no es dos" 

}
console.log(condicion1(2))

function condicion2(num2){
    if(num2 ==5) return"el numero es cinco";else return"no es cinco el numero";
}

console.log(condicion2(3))

function lista(){
    var lst=["alex","cevix","ricky"]
    return lst
}


console.log(lista())

function recorrerLista(){
    var lst2=[1,2,3,4,5,6]
    for (let i = 0; i <lst2 .length;i++){
        console.log(lst2[i])
}
}
recorrerLista()