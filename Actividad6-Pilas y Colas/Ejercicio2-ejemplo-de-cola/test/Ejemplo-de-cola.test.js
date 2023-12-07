const Queue = require('../Ejemplo-de-cola'); 

describe('Ejemplo de cola', () => {

  it('Elementos de la parte superior', () => {
    let stack = new Queue();
    stack.peek();
    stack.push('Hojas');
    stack.push('Ramas');
    stack.push('Tronco');
    stack.push('Pasto');
    stack.push('Tierra');
    let elementEliminado = stack.pop();
    console.log(elementEliminado);
  })
  it('Elementos', () => {
    let stack = new Queue();
    stack.push('Hojas');
    stack.push('Ramas');
    stack.push('Tronco');
    stack.push('Pasto');
    stack.push('Tierra');
    stack.push('Estiercol');
    console.log(stack.size());
  })
  it('Creacion de cola', () => {
    let stack = new Queue();
    console.log(stack.isEmpty());
  })
  it('Se puede usar numeros y isEmpty debe ser false. ', () => {
    let stack = new Queue();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    console.log(stack.isEmpty());
  })
  

});