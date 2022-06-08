const Calculator = require('./calculator');

const newCalc = new Calculator();

describe ('Calculator Tests' , () => {

    test(('Addition Test'), () => {
        expect(newCalc.add(2,2)).toBe(4);
        expect(newCalc.add(5,5)).toBe(10);
        expect(newCalc.add(10,10)).toBe(20);
    });

    test(('Subtaction Test'), () => {
        expect(newCalc.subtract(5,3)).toBe(2);
        expect(newCalc.subtract(10,5)).toBe(5);
        expect(newCalc.subtract(20,10)).toBe(10);
    });

    test(('Multiplication Test'), () => {
        expect(newCalc.multiply(5,5)).toBe(25);
        expect(newCalc.multiply(10,5)).toBe(50);
        expect(newCalc.multiply(20,10)).toBe(200);
    });

    test(('Division Test'), () => {
        expect(newCalc.divide(10,2)).toBe(5);
        expect(newCalc.divide(25,5)).toBe(5);
        expect(newCalc.divide(30,10)).toBe(3);
    });
})