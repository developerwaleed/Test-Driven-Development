const capitalizeStr = require('./capitalizeStr');

test('Check Captilize String Function', () => {
    expect(capitalizeStr('waleed')).toMatch(/Waleed/);
    expect(capitalizeStr('hello')).toMatch(/Hello/);
    expect(capitalizeStr('pakistan')).toMatch(/Pakistan/);
    expect(capitalizeStr('microverse')).toMatch(/Microverse/);
});