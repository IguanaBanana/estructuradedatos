const LinkedList = require('../lista-inversa.js');
describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
      linkedList = new LinkedList();
  });

  test('debería estar vacía al principio', () => {
      expect(linkedList.isEmpty()).toBe(false);
  });

  test('debería no estar vacía después de agregar elementos', () => {
      linkedList.append(1);
      expect(linkedList.isEmpty()).toBe(false);
  });

});