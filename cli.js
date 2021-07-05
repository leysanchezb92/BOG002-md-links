#!/usr/bin/env node
const chalk = require('chalk');
const yargs = require('yargs');
const { validate } = require('./functions.js');
const index = require('./index.js')
const [, , ...args] = process.argv
const path = args[0]

const argv = yargs
    .option('validate', {
            description: 'validate link HTTP status',
            alias: 'v',
            type: 'boolean',
    })
    .option('stats', {
        alias: 's',
        description: 'stats links that works or not',
        type: 'boolean',
    })
    .help()
    .alias('help', 'h')
    .argv;

if(argv.validate && argv.stats || argv.stats && argv.validate){
    index.mdLinks(path)
    .then((data)=>{
      const total= (data.length)
      const uniqueLinks=[...new Set(data.map((link)=>link.link))]
      const unique=(uniqueLinks.length)
      const validateData= validate(data)
      validateData.then((link)=>{
        // console.log(link)
        let broken=0
        link.filter((status)=>{
          if(status.status !== 200){
            const file=status.file
            broken ++ 
          } 
        })
        console.table({total, unique, broken})
      })
    })
} else if(argv.validate){
  index.mdLinks(path,true)
  .then((data)=>{
    validate(data)
    .then((arrayLinks)=>{
      console.log (arrayLinks)
    })
  })
} else if(argv.stats){
  index.mdLinks(path)
  .then((data)=>{
    const total= (data.length)
    const uniqueLinks=[...new Set(data.map((link)=>link.link))]
    const unique=(uniqueLinks.length)
    console.table({total, unique})
  })
} else if (!argv.validate && !argv.stats) {
  index.mdLinks(path).then(() => {
      console.log(`${chalk.black.bgMagenta('Please enter a valid command')}`)
  })
}

//   if (args.length == 1) {
//     index.mdLinks(path).then(array => {
//         array.forEach(object => {
//             console.table({
//                 File: object.file,
//                 href: object.href,
//                 text: object.text
//             })
//         })
//     })
// }