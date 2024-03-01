import fs from 'node:fs'
/* 
----------------------------------------------------------------------------------------------------------------------------------------------------------
EJERCICIO 6
 
Vamos a crear nuestra propia utilidad dotenv en el archivo dotenv.js.
La utilidad debe devolver un método config que lee el archivo .env y añade las variables de entorno que haya en el archivo al objeto process.env.

Cosas a tener en cuenta:

Sólo se permite usar el módulo fs para leer el archivo.
Si el archivo no existe, no debe dar error, simplemente no hace nada.
Si el archivo existe, pero no tiene ninguna variable de entorno, no debe hacer nada.
Sólo debe soportar el archivo .env o el que se le pasa como parametro, no hace falta que soporte .env.local, .env.development y similares de forma automática.
Las variables de entorno siempre son strings, por lo que si en el archivo .env hay un número, por ejemplo PORT=8080, al leerlo con fs y añadirlo a process.env debe ser un string, no un número.
process.env es un objeto y, por lo tanto, es mutable. Esto significa que podemos añadir propiedades nuevas sin problemas.
----------------------------------------------------------------------------------------------------------------------------------------------------------
*/

export function config ({path = '.env'} = {}) {
  try {
    const env = fs.readFileSync(path, 'utf8')
    //separamos al cadena de texto en base a los saltos de linea
    const lines = env.split('\n')

    lines.forEach(line => {
      const [key, ...value] = line.split('=')
      const joinedValue = value.join('=')

      const hasQuotes = joinedValue.startsWith('"') && joinedValue.endsWith('"')

      const valueToStore = hasQuotes ? joinedValue.slice(1,-1) : joinedValue

      process.env[key] = valueToStore
    })
  } catch (error) {
    console.log('')
  }

}