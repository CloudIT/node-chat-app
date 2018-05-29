const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Jason';
    var text = 'My Message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Jason';
    var lat = 38.8976763
    var long = -77.0387185

    var message = generateLocationMessage(from, lat, long);

    expect(message.from).toBe(from);
    expect(typeof message.createdAt).toBe('number');
    expect(message.url).toBe(`https://www.google.com/maps?q=${lat},${long}`);
  });
});
