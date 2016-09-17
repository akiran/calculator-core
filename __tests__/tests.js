import { add } from '../src'

describe('Calculator tests', function() {

  it('add', function() {
    expect(add(1, 2)).toBe(3)
  });
  
});