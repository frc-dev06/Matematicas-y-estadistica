//  
const JSMath={}

JSMath.sumatoria=function sumatoria(valorAcumulado, nuevoValor) {
    return valorAcumulado + Number(nuevoValor)
}
JSMath.parImpar=function parImpar(arr) {
    return !(arr.length % 2);
}
JSMath.calcularPromedio=function calcularPromedio(arr) {
    let sumatoria = 0;
    arr.forEach(element => {
        sumatoria += element;
    });
    let promedioFinal = sumatoria / arr.length
    return promedioFinal
}

JSMath.calcularMediana=function calcularMediana(lista) {
    lista.sort((a, b) => a - b)
    // console.log(lista);
    if (JSMath.parImpar(lista)) {
        let mitadesArr = []
        let numUno = (lista.length / 2) - 1
        let numDos = (lista.length / 2)

        mitadesArr.push(lista[numUno])
        mitadesArr.push(lista[numDos])

        let mediana = JSMath.calcularPromedio(mitadesArr)
        return mediana 

    } else {
        let medianaImpar = Math.floor(lista.length / 2)
        return (lista[medianaImpar]);
        
    }
}
// ordenar listas
JSMath.ordenarLista=function ordenarLista(arr) {
    function ordenar(a, b) {
        // if(a>b){
        //     return 1;
        // }else if(a==b){
        //     return 0;
        // }else if(a<b){
        //     return -1;
        // }
        return a - b;
    }
    let lista = arr.sort(ordenar);
    return lista;
}

// calcular la moda
JSMath.ordenarListaBidimencional=function ordenarListaBidimencional(arr) {
    return arr.sort((a, b) => a[1] - b[1]);
}

JSMath.calcularModa=function calcularModa(lista) {
    let listaCount = {};
    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        if (listaCount[elemento]) {
            listaCount[elemento] += 1
        } else {
            listaCount[elemento] = 1;
        }
    }

    let listaArray = Object.entries(listaCount)
    
    let listaOrdenada=ordenarListaBidimencional(listaArray);
    let listaOrdenadaMaxNumber= listaOrdenada[(listaOrdenada.length-1)]
    console.log(listaOrdenada);
    let moda= listaOrdenadaMaxNumber[0]
    console.log('la moda es '+moda);
    return moda
}