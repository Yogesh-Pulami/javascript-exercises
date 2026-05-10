const values = require('./joinStrings')

describe('step 2', () => {
  test.skip('firstName is Yogesh', () => {
    expect(values.firstName).toEqual('Yogesh');
  });
  test.skip('lastName is Pulami', () => {
    expect(values.lastName).toEqual('Pulami');
  });
  test.skip('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test.skip('birthYear is 2003', () => {
    expect(values.birthYear).toEqual(2003);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Yogesh Pulami and I am 23 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Yogesh Pulami', () => {
    expect(values.fullName).toEqual('Yogesh Pulami');
  });
  test('age is 23', () => {
    expect(values.age).toEqual(23);
  });
});
