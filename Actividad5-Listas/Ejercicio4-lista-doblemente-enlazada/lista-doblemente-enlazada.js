class NodoDoble {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaDobleEnlazada {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    estaVacia(lista) {
        return lista.primero === null;
    }

    agregarAlPrincipio(dato) {
        const nuevoNodo = new NodoDoble(dato);
        if (this.estaVacia()) {
            this.primero = this.ultimo = nuevoNodo;
        } else {
            nuevoNodo.siguiente = this.primero;
            this.primero.anterior = nuevoNodo;
            this.primero = nuevoNodo;
        }
    }

    agregarAlFinal(dato) {
        const nuevoNodo = new NodoDoble(dato);
        if (this.estaVacia()) {
            this.primero = this.ultimo = nuevoNodo;
        } else {
            nuevoNodo.anterior = this.ultimo;
            this.ultimo.siguiente = nuevoNodo;
            this.ultimo = nuevoNodo;
        }
    }

    eliminar(dato) {
        let actual = this.primero;
        while (actual !== null) {
            if (actual.dato === dato) {
                if (actual.anterior !== null) {
                    actual.anterior.siguiente = actual.siguiente;
                } else {
                    this.primero = actual.siguiente;
                }

                if (actual.siguiente !== null) {
                    actual.siguiente.anterior = actual.anterior;
                } else {
                    this.ultimo = actual.anterior;
                }
                return;
            }
            actual = actual.siguiente;
        }
    }

    mostrar() {
        let actual = this.primero;
        while (actual !== null) {
            console.log(actual.dato + ' <-> ');
            actual = actual.siguiente;
        }
        console.log('null');
    }
    isEmpty(lista){
        return lista === null; 
    }
}
module.exports = ListaDobleEnlazada;