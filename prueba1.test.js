const solution = require("./prueba1");
const filter_list = require("./prueba1")
const isPangram = require("./prueba1")

describe('solution', () => {
    test('debería retornar la suma correcta de los múltiplos de 3 y 5 menores que el número dado', () => {
      expect(solution(10)).toBe(23); // La suma de los múltiplos de 3 y 5 menores que 10 es 3 + 5 + 6 + 9 = 23
      expect(solution(20)).toBe(78); // La suma de los múltiplos de 3 y 5 menores que 20 es 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78
      expect(solution(0)).toBe(0); // Si el número dado es 0, la suma debería ser 0
      expect(solution(-10)).toBe(0); // Si el número dado es negativo, la suma debería ser 0
    });
  });

  describe('filter_list', () => {
    test('debería filtrar y retornar solo los elementos numéricos de la lista', () => {
      const input = [1, '2', 'three', 4, 'five', 6];
      const expectedOutput = [1, 4, 6];
      expect(filter_list(input)).toEqual(expectedOutput);
    });
  
    test('debería retornar una lista vacía si no hay elementos numéricos en la lista', () => {
      const input = ['one', 'two', 'three'];
      const expectedOutput = [];
      expect(filter_list(input)).toEqual(expectedOutput);
    });
  });

  describe('isPangram', () => {
    test('debería devolver true si la cadena es un pangrama', () => {
      const input = 'El veloz murciélago hindú comía feliz cardillo y kiwi';
      const expectedOutput = true;
      expect(isPangram(input)).toBe(expectedOutput);
    });
  
    test('debería devolver false si la cadena no es un pangrama', () => {
      const input = 'Hola, esto no es un pangrama';
      const expectedOutput = false;
      expect(isPangram(input)).toBe(expectedOutput);
    });
  });