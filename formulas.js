console.group('cuadrilatero')
function cuadrilatero(l){
    return{
        perimetro: l*4,
        area: l**2
    }
}
console.groupEnd('cuadrilatero')

console.group('triangulo')
function triangulo(l1,l2,base,altura){
    return{
        perimetro:(l1+l2+base),
        area:(base*altura)/2
    }
}
function alturaTriangulo(l,base){
    if(l!=base){
        // h) raiz(l**2-(b**2)/4)
        let altura= Math.pow((l**2)-(base**2)/4,1/2)
        console.log(altura)
    }else{
        console.warn("no es un triangulo isoseles")
    }
}

function areaTrianguloEscaleno(l1,l2,l3){
    let sp=(l1+l2+l3)/2
    let area= Math.pow((sp*(sp-l1)*(sp-l2)*(sp-l3)), 1/2)
    return area
}

function alturaTrianguloEscaleno(l1,l2,l3){
   let A= areaTrianguloEscaleno(l1,l2,l3)
   let h={
    hA: (2*A)/l1,
    hB: (2*A)/l2,
    hC: (2*A)/l3
   }
   return {h, A}
}
console.groupEnd('triangulo')

console.group('circulo')
function circunferencia(r){
    let pi= Math.PI
    return {
        perimetro: (2*pi*r).toFixed(2),
        area: Math.round(pi*Math.pow(r,2))
    }
}
circunferencia(8)
console.groupEnd('circulo')

