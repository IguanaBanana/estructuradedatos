const { ListNode, addTwoNumbers } = require('../Agregar-dos-numeros.js');

test('Prueba de suma de listas enlazadas Creado por Ivanna Gomez', () => {
  
    const l1 = new ListNode(3);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(2);

    const l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);

    const result = addTwoNumbers(l1, l2);

    expect(result.val).toBe(8);
    expect(result.next.val).toBe(0);
    expect(result.next.next.val).toBe(7);
    
});