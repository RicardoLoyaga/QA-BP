/*Función de ordenamiento que recibe dos parámetros: un array y el tipo de ordenamiento
solo permite ingresar tipo ordenamiento Asc/Desc*/

function ordenaArray(array, tipoOrdenamiento) {
    if (array.length === 0 || array == null) {
        console.log("Array es nulo o vacio");
    }else{
        switch (tipoOrdenamiento) {
            case 'Asc':
                metodoAscendente(array);
                console.log("Array ordenado ascendentemente");
                console.log(array);
                console.log("Longitud del array ordenado ascendentemente " + array.length);
                break;
            
            case 'Desc':
                metodoDescendente(array);
                console.log('Array ordenado descendentemente');
                console.log(array);
                console.log("Longitud del array ordenado descendentemente " + array.length);
                break;
        
            default:
                console.log("Solo puede elegir el tipo ordenamiento Asc/Desc");
                break;
        }
    }
}

function metodoAscendente(array) {
    let n, i, k, aux;
    n = array.length;
    console.log("Array ingresado");
    console.log(array);
    console.log("longitud del array ingresado " + n);
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (array[i] > array[i + 1]) {
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }
        }
    }
    return array; 
}

function metodoDescendente(array) {
    var arreglo = metodoAscendente(array);
    let longitudDelArreglo = arreglo.length;
        
    for (let x = 0; x < longitudDelArreglo / 2; x++) {
        let temporal = arreglo[x];
        let indiceContrario = longitudDelArreglo - x - 1;
        arreglo[x] = arreglo[indiceContrario];
        arreglo[indiceContrario] = temporal;
    }
};

/*Apartado de pruebas unitarias*/
console.log("Resultado de pruebas unitarias");
/*1. Verificar que no retorne lista vacía o null.*/
/*2. Verificar en caso que venga la lista nula o vacía mensaje de error.*/
console.log(ordenaArray([],'Asc'));
/*3. Verificar que la lista devuelta sea de la misma longitud que la lista enviada.*/
console.log(ordenaArray([20,3,10],'Asc'));
/*4. Verificar que la lista devuelta esté ordenada de acuerdo al parámetro enviado.*/
console.log(ordenaArray([9,2,11,5,7],'Asc'));
console.log(ordenaArray([9,2,11,5,7,100],'Desc'));