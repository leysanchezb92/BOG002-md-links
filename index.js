const file = './carpeta'
const recursion = require('./recursion.js');
const allFunctions= require('./functions.js')


function mdLinks(path,option= {validate:false}){
  const pathAbs= recursion.evaluatePath(path);
  const pathMd= recursion.mdExt(pathAbs);
  const fileReaderPromise = allFunctions.readFiles(pathMd)
  return fileReaderPromise
  .then((arr)=>{
    const objLinks=arr.flat()
    return (objLinks)//----> resultado de reader
  })
  // return Promise.all([objR])
  /* .then((arrayLinks)=>{
    if(option.validate===true){
      const arrPromise= allFunctions.validate(arrayLinks)
      console.log(arrPromise)
    } else{
      return arrayLinks
    }
  }) */
  

}

module.exports={mdLinks}
mdLinks(file).then(values => {
  return values
})
