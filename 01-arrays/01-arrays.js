
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    
    let newArray = [];

    array.forEach(elem=> {
        if(elem<10)
        newArray.unshift(elem)
    })
    console.log("newArray", newArray)

    return newArray
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos

    array1.forEach(element1 => {
        if(element1 < current || current === 0){
            console.log('soy current', current)
            current = element1
        }
        array2.forEach(element2 => {
            if(element1 === element2){
                aux = element1
            }
            if(element2 < current) {
                current = element2
            }
        });
    });

    
    if(!aux) return current
    return aux
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
   
    let newArray = [];

    array.forEach(element => {
        if(Array.isArray(element)){
            let suma = 0;

            element.forEach(e => {
                suma += e
            });

            newArray.push(suma)
            
        } else {
            newArray.push(element)
        }
    });

    return newArray
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false

    if(numero % divisor !== 0) return false

    let total = numero / divisor
    let i = 0
    let array = []

    while(divisor > i){
        array.push(total)
        i++
    }

    return array
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    
    let numeroMenor;
    let numeroMayor;
    let returnArray = [];
    
    for(let i = 0; i < array.length; i++){
        array[0] > array[i] ?
        numeroMenor = array[i]
        :
        numeroMenor = array[0]
        
        if(array[0] < array[i]) {
            numeroMayor = array[i]
        }
    };
    
    returnArray = [numeroMenor, numeroMayor];
    
    return returnArray
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};