function Multiples(){
    
    var respuesta=prompt("Desea hacer la IMC de varias personas(si/no)");
    return respuesta;
}


var respuesta=Multiples();

function respustaValida(respuesta){
    if (respuesta=="si" || respuesta =="no"){
        return respuesta;
    }else{
        var error=true;
       return error;
    }

}

var validado=respustaValida(respuesta);
console.log(validado)

function comprobarRespuesta(validado){
    
    if(validado=="si"){
        var numero=prompt("introduce el numero de persona");
        var personas=numero;
        return personas
    }else{
        var personas=1;
        return 
    }
}
var numeroPersonas=comprobarRespuesta(validado)

function ComprobarNumPersonas(numeroPersonas){
    if(typeof(numeroPersonas)=='number'){
        return "number"
    }else{
        return "no number"
    }
}

console.log(ComprobarNumPersonas(numeroPersonas))