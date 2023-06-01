const crypto = require('crypto')
const fs = require('fs')

const iv = crypto.randomBytes(16)
const key = crypto.randomBytes(32)

if (fs.existsSync('./output-keys.txt')) {
    fs.writeFileSync('./output-keys.txt', `IV: ${iv.toString('hex')}\nKey: ${key.toString('hex')}`)
} else {
    fs.appendFileSync('./output-keys.txt', `IV: ${iv.toString('hex')}\nKey: ${key.toString('hex')}`)
}