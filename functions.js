const file = './carpeta'
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const recursion = require('./recursion.js');
const { default: fetch } = require('node-fetch');


// recorrer array de links y evaluar file



// read file//
const reader = (route)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile(route, 'utf8' , (error, fileInfo) => { 
      if(fileInfo){
        resolve({ fileInfo, route })
      } else{
        reject(error)
      }
    });
  });
}
// Crear array de objetos con links//
function createObjLink(data){
  let arrLink=[]
  const links = markdownLinkExtractor(data.fileInfo, true);
  // if para comprobar los links
  links.forEach(link => {
    if(link.href.startsWith('http')){
      const getLink= link.href;
      const text = link.text;
      const objLink= {
        link: getLink,
        text: text,
        file: data.route,
      }
      arrLink.push(objLink)
    }
  });
  return (arrLink)
}
//MDLinks--> path
function readFiles(listFiles) {
    // let arrayFiles=[]
    const arrayFiles= listFiles.map((route)=>{
        return reader(route)
        .then(data => {
            const dataObj=createObjLink(data)
           return dataObj
        })
        .catch((error => console.log('soy el error',{error})))
    })
    return Promise.all(arrayFiles)
}

// FUNCIONES CLI
//validate

function validate(arrayLinks){
  const arrayPromise= arrayLinks.map((element)=>fetch(element.link)
    .then((res) => {
      if (res.status === 200) {
        return({
          ...element,
          status: res.status,
          statusText: res.statusText,
        })
      } else {
        return({
            ...element,
            status: res.status,
            statusText: 'FAIL',
        })
      }
    })
    .catch((error) => {
      error={
        ...element,
        status: 'Error',
        statusText: 'FAIL',
      }
      return error
    })
  )
    return (Promise.all(arrayPromise))
}


module.exports = {
  createObjLink,
  reader,
  validate,
  readFiles,
};