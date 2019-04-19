const core = require('../util/core');

function testGetSecret(testDesc, targetValue) {
  test(testDesc, () => {
    expect(core.getSecret()).toEqual(targetValue);
  })
}

function testGetSecretCallback(testDesc, targetValue) {
  core.getSecretCallback((err, response) => {
    if (err) {
      console.log(err);
    } else {
      test(testDesc, () => {
        expect(response).toBeDefined();
        expect(response).toEqual(targetValue);
      });
    }
  });
}

function testGetSecretPromise(testDesc, targetValue) {
  test(testDesc, () => {
    return core.getSecretPromise().then((secret) => {
      expect(secret).toBeDefined();
      expect(secret).toEqual(targetValue);
    }).catch((error) => {
      console.log(error);
    });
  });
}

function testGetSecretAsync(testDesc, targetValue) {
  test(testDesc, () => {
    core.getSecretAsync()
      .then((secret) => {
        expect(secret).toBeDefined();
        expect(secret).toEqual(targetValue);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}


function mockGetSecret(targetValue) {
  // Mock synchronous function.
  core.getSecret.mockImplementation(() => targetValue);
}

function mockGetSecretCallback(targetValue) {
  // Mock callback function.
  core.getSecretCallback.mockImplementation((callback) => {
    callback(null, targetValue);
  });
}

function mockGetSecretPromise(targetValue) {
  // Mock promise function.
  core.getSecretPromise.mockImplementation(() => {
    return new Promise(function(resolve, reject) {
      resolve(targetValue);
    });
  });
}

function mockGetSecretAsync(targetValue) {
  // Mock async implementation.
  core.getSecretAsync.mockImplementation(async () => {
    return targetValue;
  });
}

// Test the current values of the core functions.
let targetValue = 'core secret';

testGetSecret('core getSecret', targetValue);
testGetSecretCallback('core getSecretCallback', targetValue);
testGetSecretPromise('core getSecretPromise', targetValue);
testGetSecretAsync('core getSecretAsync', targetValue);


// Mock the functions in the core module.
jest.mock('../util/core');
targetValue = 'mock secret';

mockGetSecret(targetValue);
mockGetSecretCallback(targetValue);
mockGetSecretPromise(targetValue);
mockGetSecretAsync(targetValue);

// Test the current values of the core functions.
testGetSecret('mock core getSecret', targetValue);
testGetSecretCallback('mock core getSecretCallback', targetValue);
testGetSecretPromise('mock core getSecretPromise', targetValue);
testGetSecretAsync('mock core getSecretAsync', targetValue);
