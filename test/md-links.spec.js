// const { require } = require('yargs');
const index = require('../index.js');
const mocks=require('./mocks.js')

describe('mdLinks', () => {
  test('Should be a function', () => {
    const path = './randomPath.md';
    expect(typeof index.mdLinks).toBe('function');
  });

  test('should returns a promise', () => {
    const route='./carpeta'
        expect(index.mdLinks(route) instanceof Promise).toBeTruthy();
  });

  test('Should return an array f objects', () => {
    const path = 'randomPath.md';
    return index.mdLinks(path,false).then((res)=>{
      expect( res ).toEqual(expect.arrayContaining(mocks.objectLinks))
    })
  });
});
