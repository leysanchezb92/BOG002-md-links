// const { require } = require('yargs');
const index = require('../index.js');
const mocks=require('./mocks.js')

describe('mdLinks', () => {
  test('Should be a function', () => {
    const path = './carpeta/carpeta2/mock.md';
    expect(typeof index.mdLinks).toBe('function');
  });

  test('should returns a promise', () => {
    const route='./carpeta'
        expect(index.mdLinks(route) instanceof Promise).toBeTruthy();
  });

  test('Should return an array of objects', () => {
    const path = './carpeta/carpeta2/mock.md';
    return index.mdLinks(path).then((res)=>{
      expect( res ).toEqual(expect.arrayContaining([expect.objectContaining(mocks.objectLinks)]))
    })
  });

  test('Should throw an error if the file is not md', () => {
    const path = './recursion.js';
    return index.mdLinks(path).catch((res)=>{
      expect(res).toMatch('This is not a valid path', res)
    })
  });

  test('Should throw an error if the file is not md after valitation', () => {
    const path = './recursion.js';
    return index.mdLinks(path).catch((res)=>{
      expect(res).toMatch('This is not a valid path', res)
    })
  });
});
