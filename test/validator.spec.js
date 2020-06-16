// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  test('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });
});

  describe('validator.isValid', () => {
    test('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });
    test('debería retornar true para 4556364607935616', () => {
     const resultIsValid = validator.isValid("4556364607935616");
     expect(resultIsValid).toBe(true);
    });

    test('debería retornar true para "79927398713"', () => {
      const resultIsValid = validator.isValid("79927398713")
      expect(resultIsValid).toBe(true);
    });

    test('debería retornar false para "1234567890"', () => {
      const resultIsValid = validator.isValid("1234567890")
      expect(resultIsValid).toBe(false);
    });
  });
 
  describe('validator.maskify', () => {
    test('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    test('Debería retornar "############5616" para "4556364607935616"', () => {
     const maskifycard =validator.maskify("4556364607935616");
      expect(maskifycard).toBe("############5616")
    });

    test('Debería retornar "1" para "1"', () => {
      const maskifycard =validator.maskify("1");
      expect(maskifycard).toBe("1")
    });

    // it('Debería retornar "######orld" para "helloworld"', () => {
    //   const maskifycard =validator.maskify("helloworld");
    //   expect(maskifycard).toBe("######orld")
    // });
  });

