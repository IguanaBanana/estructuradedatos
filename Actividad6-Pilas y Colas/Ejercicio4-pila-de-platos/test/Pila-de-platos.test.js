const Stack = require('../Pila-de-platos'); 

describe('Ejemplo de pila de platos', () => {

  it('Se crea la pila de platos', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.print();
    expect(stack.size()).toBe(3);
  })
  it('Se eliminan platos', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const popElement = stack.pop();
    expect(popElement).toBe(3);
    stack.print();
    expect(stack.size()).toBe(2);
  })
  it('Eliminamos el ultimo plato', () => {
    let stack = new Stack();
    stack.push('Llano');
    stack.push('Hondo');
    stack.push('Tenedor');
    stack.push('Cuchara');
    stack.push('Divisiones');
    const popElement = stack.pop();
    expect(popElement).toBe('Divisiones');
    stack.print();
    expect(stack.size()).toBe(4);
  })
  it('Si ya no hay platos, se agregan', () => {
    let stack = new Stack();
    stack.peek();
    stack.print();
    stack.push('PlatoSucio1');
    stack.push('PlatoSucio2');
    stack.push('PlatoSucio3');
    stack.push('PlatoSucio4');
    stack.push('PlatoSucio5');
    stack.peek();
    stack.print();
    expect(stack.size()).toBe(5);
  })
  it('Pila vacia', () => {
    let stack = new Stack();
    console.log(stack.isEmpty());
  })

});