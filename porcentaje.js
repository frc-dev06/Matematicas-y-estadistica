const inputPrice = document.querySelector(".valor")
const inputCoupon = document.querySelector(".porcentaje")
const pResult = document.querySelector(".resultado")
const btn = document.querySelector(".calcular")



btn.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento() {
    let precio = Number(inputPrice.value);
    let coupon = inputCoupon.value;
    
    let descuento;

    switch (coupon) {
        case 'Go':
            descuento = 10;
            break;
        case 'Plus':
            descuento= 30;
            break;
        case 'PlusDuo':
            descuento=50;
            break;
        default:
            pResult.innerText = '!El cupon no es valido!'
            return;
    }
    console.log({ precio, descuento })

    if (precio != '' && descuento != '') {
        if (descuento <= 100) {
            let newDescuento = (precio * (100 - descuento) / 100);
            pResult.innerText = `El nuevo precio es ${newDescuento}`
        } else {
            pResult.innerText = '!El descuento no puede superar el 100%!'
        }
    } else {
        pResult.innerText = '¡LLENA LOS DATOS SOLICITADOS!'
    }
}
