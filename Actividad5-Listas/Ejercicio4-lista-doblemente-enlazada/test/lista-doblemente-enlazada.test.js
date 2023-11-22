const { ListaDobleEnlazada } = require('../lista-doblemente-enlazada.js'); 
const assert = require('assert');


describe('Creado por Ivanna Gomez', function() {
    it('debe comprobar si 2 + 2 es igual a 4', function() {
        assert.equal(2 + 2, 4);
    });
    it('debe comprobar si 3 + 3 es igual a 6', function() {
        assert.equal(3 + 3, 6);
    });
    it('debe comprobar si 2 / 2 es igual a 1', function() {
        assert.equal(2 / 2, 1);
    });
    test('debería estar vacía al principio', () => {
        const lista = ListaDobleEnlazada();
        expect(lista.estaVacia()).toBe(true);
    });
});