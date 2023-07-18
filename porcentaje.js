const inputPrice = document.querySelector(".valor")
const inputCoupon = document.querySelector(".porcentaje")
const pResult = document.querySelector(".resultado")
const btn = document.querySelector(".calcular")



btn.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento(){
    let precio=Number(inputPrice.value);
    let descuento= Number(inputCoupon.value);
    console.log({precio,descuento})

    if(precio!='' && descuento!=''){
        if(descuento<=100){
            let newDescuento= (precio*(100-descuento)/100);
            pResult.innerText=`El nuevo precio es ${newDescuento}`
        }else{
            pResult.innerText='!El descuento no puede superar el 100%!'
        }
    }else{
        pResult.innerText='¡LLENA LOS DATOS SOLICITADOS!'
    }
}
