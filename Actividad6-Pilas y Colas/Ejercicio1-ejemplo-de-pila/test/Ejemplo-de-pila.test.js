const Strack = require('../Ejemplo-de-pila'); 

describe('Ejemplo de pila', () => {

  it('Pila vacia existente', () => {
    let stack = new Strack();
    console.log(stack.isEmpty());
  })

  it('Solo numeros', () => {
    let stack = new Strack();
    stack.push(1);
    stack.push(2);
    stack.push(2);
    const stackArray = stack.obtenerValor();
    console.log(stackArray);
  })
  it('Devolver pila vacia', () => {
    let stack = new Strack();
    const stackarrays = stack.obtenerValor();
  })
  it('Prueba de "get"', () => {
    const myStack = new Strack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    
    const stackArray = myStack.obtenerValor();
    console.log(stackArray); 
  })
  
});