class Stack {
    constructor() {
      this.elements = [];
    }
  
    push(element) {
      this.elements.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Vacio";
      }
      return this.elements.pop();
    }
  
    isEmpty() {
      return this.elements.length === 0;
    }
  
    size() {
      return this.elements.length;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Vacio";
      }
      return this.elements[this.elements.length - 1];
    }
  }
  
  let pila = new Stack();
  
  pila.push("Platano");
  pila.push("Kiwi");
  pila.push("Pera");
  
  console.log(pila.peek());
  
  let elementoEliminado = pila.pop();
  console.log(elementoEliminado);
 
  console.log(pila.isEmpty()); 
 
  console.log(pila.size()); 
  
  module.exports = Stack;