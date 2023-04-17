// import * as fs from 'fs';

// const RUTA_ARCHIVO = './info.txt'
// /* escribir un archivo de forma sync 
// debo agregar los parametros del archivo */


// fs.writeFileSync(RUTA_ARCHIVO, ""); //las constantes se escriben en MAYUS para diferenciarlas de las variables

// // si existe el archivo deberiamos consultarlo, si no existe lo creamos con writeFile
// // console.log (fs.existsSync('./info.txt'))

// if(fs.existsSync(RUTA_ARCHIVO)){ // existe este archivo de texto? similar a un .some de los []
// //  lo primero que tengo que hacer cuando tengo un archivo es consultarlo


// let contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf-8');
// console.log(contenido)
// fs.appendFileSync(RUTA_ARCHIVO, 
//     `vivo en bariloche 
//      soy camila `
//     )
// }else{
//    //si no existe le decimos que escriba un archivo de forma sincronica
//    fs.writeFileSync(RUTA_ARCHIVO, "")
// }


// fs con callbacks no es lo mas adecuado para backend. No utilizar 


/* FS con promesas es lo mas adecuado para el manejo de archivos porque usamos async await a la vez 
y puedo modificar la ruta cuantas veces quiera,
 entonces no hay ningun problema */

import {promises as fs} from 'fs';

const PATH_FILE = './info.txt'  //nunca enviar al servidor




    
const askTXT = async (ruta) =>{
    try{
      await fs.writeFile(ruta, JSON.stringify(products))
      const CONTENT = await fs.readFile(ruta, 'utf-8') //consulto el arra
  
      //modifico, agrego y elimino
      const AUX = JSON.parse(CONTENT)
      AUX.push(product1)
      //siempre voy a tener que reemplazar
      await fs.writeFile(ruta, JSON.stringify(AUX))
      
       
    }catch{
  
    }
  }