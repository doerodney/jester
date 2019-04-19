const core = require('../util/core');

// Mock the functions in the core module.
jest.mock('../util/core');

// Mock synchronous function.
core.getSecret.mockImplementation(() => 'mock secret');

test('getSecret was effectively mocked', () => {
  const result = core.getSecret();
  expect(result).toBeDefined();
  expect(result).toEqual('mock secret');
});

// Mock callback function.
core.getSecretCallback.mockImplementation((callback) => {
  callback(null, 'mock secret');
}); 

core.getSecretCallback((err, response) => {
  if (err) {
    console.log(err);
  } else {
    test('getSecretCallback was effectively mocked', () => {
      expect(response).toBeDefined();
      expect(response).toEqual('mock secret');
    });
  }
});
  

// Mock promise function.
core.getSecretPromise.mockImplementation(() => {
  return new Promise(function(resolve, reject) {
    resolve('mock secret');
  });
});

test('getSecretPromise was effectively mocked', () => {
  return core.getSecretPromise().then((secret) => {
    expect(secret).toBeDefined();
    expect(secret).toEqual('mock secret');
  }).catch((error) => {
    console.log(error);
  });
});

// Mock async implementation.
core.getSecretAsync.mockImplementation(async () => {  
  return 'mock secret';
});

test('getSecretAsync was effectively mocked', () => {
  core.getSecretAsync()
  .then((secret) => {
    expect(secret).toBeDefined();
    expect(secret).toEqual('mock secret');
  })
  .catch((error) => {
    console.log(error);
  });
});