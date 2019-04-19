const sinon = require('sinon');
const Database = require('../function/db');

const fs = require('fs');
const database = new Database('./stub.json');

const stub = sinon.stub(fs, 'writeFile', (file, data, cb) => {
  cb();
});

const saveDone = sinon.spy();

database.insert('name', 'Sudeep');
database.save(saveDone);

sinon.assert.calledOnce(stub);
sinon.assert.calledOnce(saveDone);

fs.writeFile.restore();