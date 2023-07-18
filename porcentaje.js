const inputPrice = document.querySelector(".valor")
const inputCoupon = document.querySelector(".porcentaje")
const pResult = document.querySelector(".resultado")
const btn = document.querySelector(".calcular")



btn.addEventListener('click', calcularDescuentoTres)

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

let couponList=[];

couponList.push({
    nombre:'Go',
    descuento:10
})
couponList.push({
    nombre:'Plus',
    descuento:30
})
couponList.push({
    nombre:'PlusDuo',
    descuento:50
})
// funcion de mi autoria
function calcularDescuentoCupon(){
    let precio = Number(inputPrice.value);
    let coupon = inputCoupon.value;
    let discount;

    let couponNeed= couponList.filter(function(cupon){
        return cupon.nombre==coupon;
    })
    if(precio!='' && coupon!=''){
        if(couponNeed.length>=1){
            discount=couponNeed[0].descuento
            let descuentoFinal= (precio * (100 - discount) / 100)
            pResult.innerText=`El descuento por ser ${couponNeed[0].nombre} es de ${descuentoFinal}`
        }else{
            pResult.innerText='¡El cupon no es valido!'
        }
    }else{
        pResult.innerText='¡Llena los datos requeridos!'
    }
}
// funcion del curso
function calcularDescuentoDos() {
    let precio = Number(inputPrice.value);
    let coupon = inputCoupon.value;
    let descuento;

    let couponsObj={
        'Go':10,
        'Plus':30,
        'PlusDuo':50
    }
    if(precio!='' && coupon!=''){
        if (couponsObj[coupon]) {
            descuento=couponsObj[coupon]
            let newDescuento = (precio * (100 - descuento) / 100);
            pResult.innerText = `El nuevo precio es ${newDescuento}---`
        }else{
            pResult.innerText='¡El cupon no es valido ----!'
            return
        }
    }else{
        pResult.innerText='¡Llena los datos requeridos!'
    }
}
function calcularDescuentoTres(){
    let precio = Number(inputPrice.value);
    let coupon = inputCoupon.value;
    let descuento;

    function filtro(cupon){ //{nombre, descuento}
        return cupon.nombre==coupon;
    }
    let couponInArray=couponList.find(filtro)

    if(precio!='' && coupon!=''){
        if (couponInArray) {
            descuento=couponInArray.descuento;
            let newDescuento = (precio * (100 - descuento) / 100);
            pResult.innerText = `El nuevo precio es ${newDescuento}`
        }else{
            pResult.innerText='¡El cupon no es valido ----!'
            
        }
        console.log({
            coupon,descuento, couponInArray
        });
    }else{
        pResult.innerText='¡Llena los datos requeridos!'
    }
}
