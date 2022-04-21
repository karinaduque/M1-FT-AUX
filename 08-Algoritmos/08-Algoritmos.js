'use strict'

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for ( let i = 0; i < array.length; i++) {
    for ( let j = 0; j < array.length-1; j++) {
      if ( array[j] > array[j + 1] ) { // 5 > 1 ?
        let aux = array[j];  // aux = 5  
        array[j] = array[j+1] // [ 1, 1, 2, 2, 8]
        array[j+1] = aux; // [ 1, 5, 2, 4, 8]
      }
    }
 }
 return array;
};



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for ( let i = 0; i < array.length; i++) {
    let aux = array[i];
    for ( let j = 0; j < i; j++) { // j < 2
      if (aux < array[j]){ // 4 < 5  ---  2 < 1
         aux = array[j];  // aux = 5
         array[j] = array[i]; //  [ 1, 4, 4, 2, 8]
         array[i] = aux;  //  [1, 4, 5, 2, 8]
      }
    }
  }
  return array;     
​
}
// insertionSort([ 5, 1, 4, 2, 8]) 
// 67 pasos
 

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for ( let i = 0; i < array.length; i++) {
    let min = array[i];
    let current = i;
    for ( let j = i+1; j < array.length; j++) {
      if ( min > array[j])  {
        min = array[j]
        current = j;
      }
    }
    if ( current !== i) {
      array[current] = array[i];
      array[i] = min;
    }
  }
  return array;
}
// selectionSort([ 5, 1, 4, 2, 8])
// 80 pasos




function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1){
    return array;
  }
  var pivot= Math.floor((Math.random()*array.length));
  var right=[];
  var left=[];
  for(let i = 0; i < array.length ; i++){
    if(i!==pivot) {
      if(array[i] < array[pivot]) {
        left.push(array[i]);        
      } else {
        right.push(array[i]);
      }
    }
  }  
  return [].concat(quickSort(left), array[pivot], quickSort(right)); 
​
}
// quickSort([ 5, 1, 4, 2, 8])
// 87 pasos


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if(array.length <= 1){
    return array;
  }
  var index= Math.floor(array.length/2);
  var left= array.slice(0,index);
  var right= array.slice(index);
      
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    var result = [];
    var indexLeft = 0;
    var indexRight = 0;
    while(indexLeft < left.length && indexRight < right.length){
      if(left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft]);
        indexLeft++;
      }
      else{
        result.push(right[indexRight]);
        indexRight++
      }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
​
}
// mergeSort([ 5, 1, 4, 2, 8])
// 104 pasos 
  

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};