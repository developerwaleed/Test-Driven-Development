const stringLength = require ('./stringLength');

test('Check if StringLength Function work', () => {
 expect(stringLength('waleed')).toBe(6);
});

test('Check if String length meets requirements', () => {
 expect(() => stringLength('helloWorld!')).toThrow(Error);
});