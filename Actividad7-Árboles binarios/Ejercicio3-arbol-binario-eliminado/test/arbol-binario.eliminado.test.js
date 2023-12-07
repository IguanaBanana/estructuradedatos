const { Node, insert, deleteNode, inorder } = require('../arbol-binario-eliminado');

describe('Buscador de 3 opciones', () => {
  let root;

  beforeEach(() => {
    root = null;
  });

  test('insert inserta', () => {
    const keys = [15, 10, 20, 8, 12, 16];

    for (const key of keys) {
      root = insert(root, key);
    }

    inorder(root);
  });

  test('deleteNode elimina', () => {
    const keys = [15, 10, 20, 8, 12, 16];

    for (const key of keys) {
      root = insert(root, key);
    }


    root = deleteNode(root, 16);

    inorder(root);
  });
});