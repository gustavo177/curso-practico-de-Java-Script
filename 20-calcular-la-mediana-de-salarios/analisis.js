const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

/* Ordena los salarios de menor a mayor */
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
       return salaryA - salaryB;
    }
);

function esPar(numerito){
    /* if (numerito % 2 ===0) {
        return true;
    } else {
        return false;
    } */
    return (numerito % 2 ===0);
}
function calcularMediaArimetica(lista){
    /* let sumaLista = 0;
    for (let i=0; i<lista.length; i++){
    sumaLista=sumaLista+lista[i];
    } */

    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){
            return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if (esPar(lista.length)) {
        const personita1 = lista[mitad - 1];
        const personita2 = lista[mitad];

        const mediana = calcularMediaArimetica([personita1, personita2]);
        return mediana;
    } else {
        const personita = lista[mitad];
        return personita;
    }
}

console.log(
    medianaSalarios(salariosColSorted)
)