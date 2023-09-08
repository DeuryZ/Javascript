function borned(edad){
    var year=2023-edad;
    console.log("naciste en ",year);
}
//---------------------------
function celsius(grados){
    var fahrenheit=32+(9*(grados/5));
    console.log(grados," grados centigrados equivalen a ",fahrenheit," grados fahrenheit");
}
//---------------------------
function promo(cliente){
    var porcentaje=0;
    if(cliente>0 && cliente<21){
        porcentaje=30;
        console.log("tu porcentaje de descuento por ser el ciente numero ",cliente," es ",porcentaje)
    }
    else if(cliente>20 && cliente<51){
        porcentaje=10;
        console.log("tu porcentaje de descuento por ser el ciente numero ",cliente," es ",porcentaje)
    }
    else if(cliente<0){
        console.log("Error value");
    }
    else{
        porcentaje=0;
        console.log("tu porcentaje de descuento por ser el ciente numero ",cliente," es ",porcentaje)
    }
}
//---------------------------
borned(22)
celsius(36)
promo(5)
promo(22)
promo(60)
promo(-50)

console.log() 
var user={
    name:"Misael",
    age:22,
    isAlive:true,
    hobbies:["lol",23,false],
    
}