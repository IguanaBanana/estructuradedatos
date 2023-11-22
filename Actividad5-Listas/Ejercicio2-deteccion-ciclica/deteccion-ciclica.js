
class Nodo{
    constructor(valor){
        this.valor = valor; 
        this.next = null; 
    }

}
function detectarCiclo(lista){
    let l1 = lista; 
    let l2 = lista; 

    while(l2 !== null && l2.next !== null){
        if(l1 === l2){
            return true; 
        }
    }
    return false; 
}
function estaVacia(lista){
    return lista === null; 
}
module.exports = {Nodo,detectarCiclo,estaVacia};