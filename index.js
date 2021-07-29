const { payloads } = require('./payloads.json')
const { Worker } = require('worker_threads')

const LEADING_ZEROES = 4
const final = []
let finishedWorkers = 0

for (let payload of payloads) {
  const worker = new Worker('./worker.js', { env: { LEADING_ZEROES } })
  worker.once('message', (message) => {
    final.push(message)
    finishedWorkers++
    if (finishedWorkers === payloads.length) console.log(final)
  })
  worker.on('error', console.error)

  console.log(`Iniciando worker de ID ${worker.threadId} e enviando o payload "${payload}"`)
  worker.postMessage(payload)
}