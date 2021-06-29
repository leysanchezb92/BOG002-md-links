#!/usr/bin/env node
const yargs = require('yargs');
const { validate } = require('./functions.js');
const index = require('./index.js')
const [, , ...args] = process.argv
const path = './carpeta'
console.log('path',path)


const argv = yargs
    .option('validate', {
            description: 'validate link HTTP status',
            alias: 'v',
            type: 'boolean',
    })
    .option('stats', {
        alias: 's',
        description: 'stats links that works or not',
        type: 'number',
    })
    .help()
    .alias('help', 'h')
    .argv;

    if (args.length == 1) {
      index.mdLinks(path).then(array => {
          array.forEach(object => {
              console.table({
                  File: object.file,
                  href: object.href,
                  text: object.text
              })
          })
      })
  }
if(argv.validate && argv.stats){
  console.log('Estoy haciendo validate y stats')
} else if(argv.validate){
  index.mdLinks(path,true)
  .then((data)=>{ //---> revisar el resulado de la funcion mdlinks
    validate(data)
    .then((arrayLinks)=>{
      console.log (arrayLinks)
    })
  })
  
} else if(argv.stats){
  console.log('solosoy stats')
}
