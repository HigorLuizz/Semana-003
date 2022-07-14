function retornaAquantidadeDeParesEimparesDigitados (lista = []){
    var contPar = 0;
    var contImpar = 0;
    for (let pos in lista){
        if (lista[pos] % 2 == 0){
            contPar++
        }else{
            contImpar++
        }
    }
    return "A quantidade de número é de "+lista.length+", sendo "+contPar+" pares e "+contImpar+" impares."
}
retornaAquantidadeDeParesEimparesDigitados([0,1,3,6,5,9,7])