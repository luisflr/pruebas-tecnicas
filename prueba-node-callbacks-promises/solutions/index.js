import net from 'node:net'
import fs from 'node:fs'
import fsp from 'node:fs/promises'

/* 
----------------------------------------------------------------------------------------------------------------------------------------------------------
EJERCICIO 1

Arregla esta función para que el código posterior funcione como se espera:
----------------------------------------------------------------------------------------------------------------------------------------------------------
*/
export const ping = (ip, callback) => {
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end()
    callback(null, { time: process.hrtime(startTime), ip })
  })
  
  client.on('error', (err) => {
    callback(err)
    client.end()
  })
}

// ping('midu.dev', (err, info) => {
//   if (err) console.error(err)
//   console.log(info)
// })


/* 
----------------------------------------------------------------------------------------------------------------------------------------------------------
EJERCICIO 2

Transforma la siguiente función para que funcione con promesas en lugar de callbacks:
----------------------------------------------------------------------------------------------------------------------------------------------------------
*/
export function obtenerDatosPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 'datos importantes' });
    }, 2000);
  })
}

// obtenerDatosPromise().then(res => console.log(res))


/* 
----------------------------------------------------------------------------------------------------------------------------------------------------------
EJERCICIO 3
 
Explica qué hace la funcion. 
Identifica y corrige los errores en el siguiente código. 
Si ves algo innecesario, elimínalo. 
Luego mejoralo para que siga funcionando con callback y luego haz lo que consideres para mejorar su legibilidad.
----------------------------------------------------------------------------------------------------------------------------------------------------------
*/

//Factorizacion 1 

export function procesarArchivo(callback) {
  const handleWriteFile = err => {
    if (err) {
      console.error('Error leyendo archivo:', err.message);
      callback(err)
    }

    console.log('Archivo procesado y guardado con éxito');
    callback(null)
  }

  const handleReadFile = (err, contenido) => {
    if (err) {
      console.error('Error leyendo archivo:', err.message);
      callback(err)
    }
    
    const textoProcesado = contenido.toUpperCase();
    fs.writeFile('output.txt', textoProcesado, handleWriteFile)
  }
  fs.readFile('input.txt', 'utf8', handleReadFile);
} 

// Factorizacion 2

export async function procesarArchivoPromise() {
  const contenido = await fsp.readFile('input.txt', 'utf8').catch(e => contenido = 'error')
  const textoProcesado = contenido.toUpperCase()
  await fsp.writeFile('output.txt', textoProcesado, 'utf8').catch(e => console.error(e))
} 

/* 
----------------------------------------------------------------------------------------------------------------------------------------------------------
EJERCICIO 4
 
¿Cómo mejorarías el siguiente código y por qué? Arregla los tests si es necesario:
----------------------------------------------------------------------------------------------------------------------------------------------------------
*/

export async function leerArchivos() {
  console.time('inicio')
  const archivo1 = await fsp.readFile('file1.txt', 'utf8').catch(error => {
    console.error(error)
    return ''
  });
  const archivo2 = await fsp.readFile('file2.txt', 'utf8').catch(error => {
    console.error(error)
    return ''
  });
  const archivo3 = await fsp.readFile('file3.txt', 'utf8').catch(error => {
    console.error(error)
    return ''
  });

  console.timeEnd('inicio')
  return `${archivo1} ${archivo2} ${archivo3}`
}

export async function leerArchivos2() {
  console.time('inicio2')
  const [ file1, file2, file3 ] = await Promise.allSettled([
    fsp.readFile('file1.txt', 'utf8'),
    fsp.readFile('file2.txt', 'utf8'),
    fsp.readFile('file3.txt', 'utf8')
  ]).catch(e => {
    console.error(e)
    return []
  })

  console.timeEnd('inicio2')
  return `${file1} ${file2} ${file3}`
}


/* 
----------------------------------------------------------------------------------------------------------------------------------------------------------
EJERCICIO 5
 
Escribe una funcion delay que retorne una promesa que se resuelva después de n milisegundos. Por ejemplo:
----------------------------------------------------------------------------------------------------------------------------------------------------------
*/
export async function delay (n) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, n)
  })
}

delay(3000).then(() => console.log('Hola mundo'));
// o..
await delay(3000)
console.log('Hola mundo')



