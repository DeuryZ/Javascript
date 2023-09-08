function numeroMayor(){
    var matr=[[1,2,3],[400,3,2],[45,5,20],[50,58,60,22]]

    
    var numeroMayor=0
    for (var i = 0; i < matr.length; i++){
        for (var j = 0; j < matr[i].length; j++) {
            if (numeroMayor<matr[i][j]){
                numeroMayor=matr[i][j]
            }
        }
    }
    document.write(numeroMayor)
}

function fibonacci(){
    var limite=prompt("Digita cuantos numeros de fibonacci quieres")
    var num1=0
    var num2=1
    var num3=0
    document.write(num1+"<hr>")
    document.write(num2+"<hr>")
    for(var i=0; i<limite;i++){
        num3=num2+num1
        num1=num2
        num2=num3
        console.log(num3)
        document.write(num3+"<hr>")
    }
}

function numerosPerfectos(){
    var cont=0;
    var suma=0;
    var i=2
    while(cont<10){
        for(var j=1;j<i;j++){
            if(i%j==0){
                suma=suma+j
            }
        }
        if(i=suma){
            document.write(suma+"<hr>")
        }
        cont++
        i++
    }
}
numerosPerfectos()
