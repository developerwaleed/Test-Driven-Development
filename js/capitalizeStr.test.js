const capitalizeStr = require('./capitalizeStr');

test('Check Captilize String Function', () => {
    expect(capitalizeStr('waleed')).toMatch(/Waleed/);
});