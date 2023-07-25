const contenedorNotas = document.querySelector('.notas')
const resultado = document.querySelector('.resul')
const btnNew = document.querySelector('.nuevo')
const btn = document.querySelector('.calcular')

let notas = [];

btnNew.addEventListener('click', function () {
    let inputNN = document.createElement('input')
    inputNN.classList.add('nota')

    contenedorNotas.appendChild(inputNN)

    notas = document.querySelectorAll('.nota')
    console.log(notas)
})

// btn.addEventListener('click',function(){

//     if(notas.length>=2){
//         let sumatoria=0;
//         notas.forEach(nt => {
//             let n= Number(nt.value)
//             sumatoria+=n
//         });
//         let promedio= (sumatoria/notas.length).toFixed(3)
//         resultado.innerText=`El promedio es de ${promedio}`
//     }else{
//         resultado.innerText=`Debes ingresar mas de dos notas para generar un promedio`
//     }
// })
function sumatoria(valorAcumulado, nuevoValor) {
    return valorAcumulado + Number(nuevoValor)
}
function parImpar(arr) {
    return !(arr.length % 2);
}
btn.addEventListener('click', function () {
    let valoresNotas = Array.from(notas).map(input => input.value);
    let notasNumeros = valoresNotas.map(Number);

    if (notasNumeros.length >= 2) {
        let sumaLista = notasNumeros.reduce(sumatoria)
        let prom = sumaLista / notasNumeros.length
        resultado.innerText = `---El promedio es ${prom}---`
        parImpar(notasNumeros)
        console.log(notasNumeros.length);
    } else {
        resultado.innerText = `---Debes añadir mas valores---`
    }
})

function calcularPromedio(arr) {
    let sumatoria = 0;
    arr.forEach(element => {
        sumatoria += element;
    });
    let promedioFinal = sumatoria / arr.length
    return promedioFinal
}

function calcularMediana(lista) {
    lista.sort((a, b) => a - b)
    console.log(lista);
    if (parImpar(lista)) {
        let mitadesArr = []
        let numUno = (lista.length / 2) - 1
        let numDos = (lista.length / 2)

        mitadesArr.push(lista[numUno])
        mitadesArr.push(lista[numDos])

        let mediana = calcularPromedio(mitadesArr)
        console.log('La mediana es igual a: ' + mediana);

    } else {
        let medianaImpar = Math.round(lista.length / 2)
        console.log(lista[medianaImpar] - 1);
    }
}
// ordenar listas
function ordenarLista(arr) {
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
function ordenarListaBidimencional(arr) {
    return arr.sort((a, b) => a[1] - b[1]);
}

function calcularModa(lista) {
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