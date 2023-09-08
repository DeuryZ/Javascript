function primosgemelos(){
    var numeroPrimo=true;
    for(var i=2;i<100;i++){
        numeroPrimo=true
        for(var j=2;j<i;j++){
            if(i%j==0){
                numeroPrimo=false;
            }
        }
        if(numeroPrimo){
            var numeroPrimoActual=i
            var numeroPrimoFuturo=numeroPrimoActual+2
            for(var k=2;k<numeroPrimoFuturo;k++){
                if(numeroPrimoFuturo%k==0){
                    numeroPrimo=false;
                }
            }
            if(numeroPrimo){
                console.log(numeroPrimoActual,numeroPrimoFuturo);
            }
        }
    }
}
function primoPalindromo(){
    limite=prompt("ingrese el numero max")
    for(var i=2;i<limite;i++){
        var numeroPrimo=true;
        for(var j=2;j<i;j++){
            if(i%j==0){
                numeroPrimo=false;
            }
        }
        if(numeroPrimo){
            var numero=String(i)
            var tamano=numero.length
            var numeroinverso=[]
            for(var k=0;k<tamano;k++){
                numeroinverso=numero[k]+numeroinverso;
            }
            if(numero==numeroinverso){
                console.log(numero," es un palindromo")
                document.write(numero," es un palindromo<br/>")
            }
        }
    }
}
primoPalindromo()
//for (var i = 0; i < lista.length; resultado += lista[i][0], i++);