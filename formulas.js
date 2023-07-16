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
console.groupEnd('triangulo')