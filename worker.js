const { parentPort } = require('worker_threads')
const crypto = require('crypto')

parentPort.once('message', (message) => {
  const payload = message
  let nonce = 0
  let generatedHash = ''

  do {
    generatedHash = crypto.createHash('sha256').update(payload + nonce).digest('hex')
    nonce++
  } while (generatedHash.slice(0, process.env.LEADING_ZEROES) !== '0'.repeat(process.env.LEADING_ZEROES))

  parentPort.postMessage({ payload: message, nonce, hash: generatedHash })
})

