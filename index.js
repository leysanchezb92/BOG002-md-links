
const recursion = require('./recursion.js');
const allFunctions= require('./functions.js')


function mdLinks(path,option= {validate:false}){
  const pathAbs= recursion.evaluatePath(path);
  const pathMd= recursion.mdExt(pathAbs);
  const fileReaderPromise = allFunctions.readFiles(pathMd)
  return fileReaderPromise
  .then((arr)=>{
    const objLinks=arr.flat()
    if(option.validate){
      allFunctions.validate(objLinks)
      .then((e)=>{
        // console.log('Estoy en index',e)
        return e
      })
    }
    return (objLinks)
  })
  .catch((error)=>{
    console.error('This is not a valid path', error)
  })
}

module.exports={mdLinks}

