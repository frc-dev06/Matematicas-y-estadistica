// analasis salarial para juanita
console.log(salarios);

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda)
}
function medianaPorPersona(nombrePersona) {
    let trabajos = encontrarPersona(nombrePersona).trabajos
    let salarios = trabajos.map(año => año.salario)
    let mediana = JSMath.calcularMediana(salarios)
    // console.log(`La mediana de ${nombrePersona} en sus años de trabajo es de ${mediana}`);
    return mediana
}
function proyeccion(arr){
    let porcentajes = []

    for (let i = 1; i < arr.length; i++) {
        let por = ((arr[i] * 100) / arr[i - 1]) - 100
        porcentajes.push(por)
    }

    let medianaPorcentajes = JSMath.calcularMediana(porcentajes)
    let ultimoSueldo = arr[arr.length - 1];
    let aumento = medianaPorcentajes;

    let proyeccion = ultimoSueldo + (ultimoSueldo * (medianaPorcentajes / 100))
    return proyeccion
}
function proyeccionPorPersona(nombrePersona) {
    let trabajos = encontrarPersona(nombrePersona).trabajos;
    let salarios = trabajos.map((año) => año.salario)
    
    return proyeccion(salarios)
}

 
const empresas={};


for(persona of salarios){
    for(trabajo of  persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa]={}
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year]=[];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}
console.log(empresas);

function medianaEmpresaYear(empresa,año){
    let company={}
    let year=año.toString()
    if(!empresas[empresa]){
        console.warn('La empresa no existe')
    }else if(!empresas[empresa][año]){
        console.warn('No hay salarios de dicho año')
    }else{
        let em= empresas[empresa];//objeto de la empresa actual 
        for(año in em){
            if(!company[año]){
                company[año]
            }
            company[año]=JSMath.calcularMediana(em[año])
        }
        return company[year]
    }
}

function proyeccionSalarialEmpresa(nombre){
    let company=empresas[nombre]
    let proyeccionesAnuales=[];
    for(año in company){{
        proyeccionesAnuales.push(JSMath.calcularMediana(company[año]))
    }}
    console.log(proyeccionesAnuales);
    console.log('la proyeccion global para '+nombre+ 'es de '+proyeccion(proyeccionesAnuales));

}

function topDiez(){
    let listaMedianas = salarios.map((persona) =>
        medianaPorPersona(persona.name)
    );
    let listOrdenada= listaMedianas.sort((a,b)=>a-b)
    // console.log(listOrdenada);
    let top=[]
    const inicio=Math.floor((listOrdenada.length)/2)
    const fin=listOrdenada.length-1
    for(let i=inicio; i<=fin; i++){
        top.push(listOrdenada[i])
    }
    
    let medianaTop=JSMath.calcularMediana(top)
    console.log(`el top 10 es pertenece a la sigioente lista: ${top} y la mediana del top es de ${medianaTop}`);
    
}
// crear graficos
const contenedor= document.querySelector('.content')
const ctx =  document.querySelector('.myChart')
const nombres=['felipe','juan','carlos','christian','manuel']
const edades=[12,23,15,19,20]

const myChart= new Chart(ctx,{
    type: 'bar',
    data:{
        labels:nombres,
        datasets:[{
            label:'Edad',
            data: edades,
            backgroundColor:[
                '#caf729',
                '#79dd7e',
                '#2ecbaa',
                '#21b6b6',
                '#888dda'
            ],
            borderColor:[
                '#0f0f0f'
            ],
            borderWidth:1.5
        }]
    }
})

function salariosPorPersona(arr){
    for (let i = 0; i < arr.length; i++) {
        let tablero= document.createElement('canvas')
        tablero.classList.add('myChart')
        contenedor.appendChild(tablero)

        let personas= arr[i].name
        let años= arr[i].trabajos.map(año=>año.year)
        let salarios= arr[i].trabajos.map(año=>año.salario)
        
        const graficosAnalisisSalarial= new Chart(tablero,{
            type:'bar',
            data:{
                labels:años,
                datasets:[{
                    label:personas,
                    data:salarios,
                    backgroundColor:[
                        '#caf729',
                        '#79dd7e',
                        '#2ecbaa',
                        '#21b6b6',
                        '#888dda'
                    ],
                    borderColor:[
                        '#0f0f0f'
                    ],
                    borderWidth:1.5
                }]
            }
        })
    }

}

salariosPorPersona(salarios)