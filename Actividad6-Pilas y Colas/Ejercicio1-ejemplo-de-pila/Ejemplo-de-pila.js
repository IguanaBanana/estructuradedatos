class Strack{
    constructor(){
        this.stack = [];
        
    }
    push(element){
        this.stack.push(element);
        return this.stack
    }
    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length-1];
    }
    size(){
        return this.stack.length;
    }
    obtenerValor(){
        return this.stack;
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}
module.exports = Strack;