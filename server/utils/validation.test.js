const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  var strTest = 'Test';
  var strSpace = '   ';

  it('should reject non-string values', () => {
    expect(isRealString({name: 'test'})).toBe(false);
  });
  it('should reject string with only spaces', () => {
    expect(isRealString(strSpace)).toBe(false);
  });
  it('should allow string with non-space characters', () => {
    expect(isRealString(strTest)).toBe(true);
  });
});
