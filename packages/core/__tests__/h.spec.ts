import { h } from '../h';

const mockFunction = jest.fn((a, b) => [a, b]);

// return [{prop: 1}, [[{prop: 2}, ['Hello', 'There']],[{prop: 3},['Goodbye', 'Friend']]

h(mockFunction, { prop: 1 }, [
  h(mockFunction, { prop: 2 }, ['Hello', 'There']),
  h(mockFunction, { prop: 3 }, ['Goodbye', 'Friend']),
]);

describe('h pragma', () => {
  it('should be called and call any children inside', () => {
    expect(mockFunction.mock.calls.length).toBe(3);
  });

  it('should receive an object of props which are passed to the function', () => {
    expect(mockFunction.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(mockFunction.mock.calls[0][0]['prop']).toBe(2);
    expect(mockFunction.mock.calls[1][0]['prop']).toBe(3);
    expect(mockFunction.mock.calls[2][0]['prop']).toBe(1);
  });

  it('should receive an array of children which are passed to the function', () => {
    expect(mockFunction.mock.calls[0][1][0]).toBeInstanceOf(Array);
  });
});
