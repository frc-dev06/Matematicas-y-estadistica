const num = document.querySelector(".valor")
const porcentaje = document.querySelector(".porcentaje")
const resul = document.querySelector(".resultado")
const btn = document.querySelector(".calcular")

function calcularDescuento(val, porcentaje) {
    let descuento = val - ((val / 100) * porcentaje)
    resul.innerText = `El descuento aplicado a $${val} es de ${descuento}`
}

btn.addEventListener('click', function () {
    if (num.value != '' && porcentaje.value != '') {
        if (parseFloat(porcentaje.value) <= 100) {
            let valor = parseFloat(num.value)
            let porcent = parseFloat(porcentaje.value)
            calcularDescuento(valor, porcent)
        }else{
            alert('El descuento no puede ser superior a 100%')
            porcentaje.value=''
        }
    } else {
        alert('aseurate de llenar los campos')
    }
})