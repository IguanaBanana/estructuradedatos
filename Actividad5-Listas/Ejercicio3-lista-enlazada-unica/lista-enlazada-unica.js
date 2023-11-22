class Nodo{
    constructor (valor){
        this.valor = valor;
        this.next = null;
    }
}
class listaEnlazada{
    constructor(){
        this.head = null; 
    }
    estaVacia(){
        return this.head === null; 
    }
    agregar(valor){
        const nuevoValor = new Nodo(valor);
        if(this.estaVacia()){
            this.head = nuevoValor;
        }else{
            let actual = this.head; 
            while(actual.next){
                actual = actual.next;
            }
            actual.next = nuevoValor; 
        }
    }
    isEmpty(lista){
        return lista === null; 
    }
}
module.exports = listaEnlazada;