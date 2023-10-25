const duplicateEncode = require("./prueba2");
const findOdd = require("./prueba2")
const highAndLow = require("./prueba2")

describe('duplicateEncode', () => {
    it('debería devolver la cadena codificada correctamente', () => {
      expect(duplicateEncode('recede')).toEqual('()()()');
      expect(duplicateEncode('Success')).toEqual(')())())');
      expect(duplicateEncode('(( @')).toEqual('))((');
    });
  });

  describe('findOdd', () => {
    it('debería devolver el número que aparece un número impar de veces', () => {
      expect(findOdd([1, 2, 2, 3, 3, 1, 4])).toEqual(4);
      expect(findOdd([1, 1, 2, 2, 3])).toEqual(3);
      expect(findOdd([5, 5, 6, 6, 7, 7, 8])).toEqual(8);
      expect(findOdd([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2])).toEqual(2);
    });
  });

  describe('highAndLow', () => {
    it('debería devolver el número más alto y el más bajo', () => {
      expect(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toEqual('542 -214');
      expect(highAndLow('1 -1')).toEqual('1 -1');
      expect(highAndLow('1 1')).toEqual('1 1');
      expect(highAndLow('-1 -1')).toEqual('-1 -1');
      expect(highAndLow('1 -1 0')).toEqual('1 -1');
      expect(highAndLow('1 1 0')).toEqual('1 0');
      expect(highAndLow('-1 -1 0')).toEqual('0 -1');
      expect(highAndLow('42')).toEqual('42 42');
    });
  });