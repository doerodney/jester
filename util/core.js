exports.getSecret = function() {
	return 'core secret';
}

exports.getSecretCallback = function(callback) {
  callback(null, 'core secret');
}

exports.getSecretPromise = function() {
  return new Promise(function(resolve, reject) {
    resolve('core secret');
  });
}

exports.getSecretAsync = (async () => {
  const data = await exports.getSecret();
  return data;
});
