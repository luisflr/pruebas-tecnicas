import net from 'node:net'

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// EJERCICIO 1
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
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


// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// EJERCICIO 2
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
export function obtenerDatosPromise() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: 'datos importantes111' });
    }, 2000);
  })
}

// obtenerDatosPromise().then(res => console.log(res))


