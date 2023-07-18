const contenedorNotas = document.querySelector('.notas')
const resultado = document.querySelector('.resul')
const btnNew = document.querySelector('.nuevo')
const btn = document.querySelector('.calcular')

let notas=[];

btnNew.addEventListener('click', function () {
    let inputNN = document.createElement('input')
    inputNN.classList.add('nota')

    contenedorNotas.appendChild(inputNN)

    notas = document.querySelectorAll('.nota')
    console.log(notas)
})

btn.addEventListener('click',function(){
    
    if(notas.length>=2){
        let sumatoria=0;
        notas.forEach(nt => {
            let n= Number(nt.value)
            sumatoria+=n
        });
        let promedio= (sumatoria/notas.length).toFixed(3)
        resultado.innerText=`El promedio es de ${promedio}`
    }else{
        resultado.innerText=`Debes ingresar mas de dos notas para generar un promedio`
    }
})