function MayorEdad(){
    console.log("Soy mayor de edad")

}

function menorEdad(){
    console.log('soy menor de edad')
}

function preguntarEdad(){
if(confirm("eres mayor de edad")){
    MayorEdad()
}else{
    menorEdad()
}

}
preguntarEdad()