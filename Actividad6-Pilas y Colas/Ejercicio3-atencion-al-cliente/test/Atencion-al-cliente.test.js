const Queue = require('../Atencion-al-cliente');

describe('Ejemplo de atencion al cliente', () => {
    it('3 clientes en espera', () => {
        let stack = new Queue();
        stack.peek();
        stack.push('Ivanna');
        stack.push('Elena');
        stack.push('Jesus');
        //console.log(stack.peek());
      })
      it('Eliminar el ultimo cliente en espera', () => {
        let stack = new Queue();
        stack.peek();
        stack.push('Ivanna');
        stack.push('Elena');
        stack.push('Jesus');
        let elementEliminado = stack.pop();
        console.log(elementEliminado);
      })
      it('Cola sin clientes nuevos y vacia', () => {
        let stack = new Queue();
        console.log(stack.isEmpty());
      })
});