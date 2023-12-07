const Stack = require('../arbol-binario-agregado');


describe('Stack', () => {
  test('push y peek deben agregar y devolver el elemento en la parte superior', () => {
    const pila = new Stack();
    pila.push('Platano');
    pila.push('Kiwi');
    expect(pila.peek()).toBe('Kiwi');
  });


  test('pop debe eliminar y devolver el elemento en la parte superior', () => {
    const pila = new Stack();
    pila.push('Platano');
    pila.push('Kiwi');
    const elementoEliminado = pila.pop();
    expect(elementoEliminado).toBe('Kiwi');
    expect(pila.size()).toBe(1);
  });


  test('isEmpty debe devolver true si está vacía', () => {
    const pila = new Stack();
    expect(pila.isEmpty()).toBe(true);
  });


  test('size debe devolver el tamaño', () => {
    const pila = new Stack();
    pila.push('Platano');
    pila.push('Kiwi');
    expect(pila.size()).toBe(2);
  });


  test('pop y peek deben devolver un mensaje si está vacía', () => {
    const pila = new Stack();
    expect(pila.pop()).toBe('Vacio');
    expect(pila.peek()).toBe('Vacio');
  });
});