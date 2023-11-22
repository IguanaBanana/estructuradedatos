const {Nodo, detectarCiclo,estaVacia} = require('../deteccion-ciclica.js');
const assert = require('assert');

describe('Detección de ciclo en lista creado por Ivanna Gomez', function () {
    it('debe detectar un ciclo en una lista con ciclo', function () {
        const listaConCiclo = new Nodo(1);
        listaConCiclo.next = new Nodo(2);
        listaConCiclo.next.next = new Nodo(3);
        listaConCiclo.next.next.next = new Nodo(4);
        listaConCiclo.next.next.next = listaConCiclo;

        const resultado = detectarCiclo(listaConCiclo);
        assert.strictEqual(resultado, true);
        console.log(listaConCiclo);
    });
    it('debe detectar un ciclo en una lista con ciclo', function () {
        const listaConCiclo = new Nodo(2);
        listaConCiclo.next = new Nodo(3);
        listaConCiclo.next.next = new Nodo(4);
        listaConCiclo.next.next.next = new Nodo(5);
        listaConCiclo.next.next.next = listaConCiclo; 

        const resultado = detectarCiclo(listaConCiclo);
        assert.strictEqual(resultado, true);
        console.log(listaConCiclo);
    });
    it('devaloramos que esté vacía la lista', function () {
        const listaVacia = new estaVacia();
        console.log(listaVacia);
       
    });
})