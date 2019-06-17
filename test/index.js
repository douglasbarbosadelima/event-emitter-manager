const expect = require('chai').expect;
const ManageEmitter = require('./../app')();

describe('Test methods of ManageEmitter class', () => {

  const manageEmitter = new ManageEmitter({
    inspect: false,
    reportSeconds: 30000,
    actionOnWarning: true,
    increment: 10,
    showConsoleInspect: false
  });

  it('manageEmitter.listAllEvents()', () => {
    expect(manageEmitter.listAllEvents()).to.be.an('object');
    expect(manageEmitter.listAllEvents()).to.not.be.an('error');
  });

  it('manageEmitter.listCountProcess()', () => {
    expect(manageEmitter.listCountProcess()).to.be.an('number');
    expect(manageEmitter.listCountProcess()).to.not.be.an('error');
  });

  it('manageEmitter.getMemoryInfo()', () => {
    expect(manageEmitter.getMemoryInfo()).to.be.an('object');
    expect(manageEmitter.getMemoryInfo()).to.include.all.keys('rss', 'heapTotal', 'heapUsed', 'external');
    expect(manageEmitter.getMemoryInfo()).to.not.be.an('error');
  });

  it('manageEmitter.getMaxListeners()', () => {
    expect(manageEmitter.getMaxListeners()).to.be.an('number');
    expect(manageEmitter.getMaxListeners()).to.not.be.an('error');
  });

  it('manageEmitter.setLimitListener() with paramter', () => {
    expect(manageEmitter.setLimitListener(10)).to.be.an('string');
    expect(manageEmitter.setLimitListener(10)).to.not.be.an('error');
  });

  it('manageEmitter.setLimitListener() without paramter', () => {
    expect(manageEmitter.setLimitListener()).to.be.an('error');
    expect(manageEmitter.setLimitListener()).to.not.be.an('string');
  });

  it('manageEmitter.setLimitLess()', () => {
    expect(manageEmitter.setLimitLess()).to.be.an('string');
    expect(manageEmitter.setLimitLess()).to.not.be.an('error');
  });
});