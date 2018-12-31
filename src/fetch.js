const fetch = require('axios').default
const https = require('https')
const storage = require('./storage')
const logger = require('./logger')

const agent = new https.Agent({
  rejectUnauthorized: false
})

module.exports = async function cbsFetch(data) {
  const config = await storage.getFetchSetting()
  const cbsReq = data
    .replace('{clientId}', config.clientId)
    .replace('{userId}', config.userId)
    .replace('{runNo}', config.runNo)

  logger.info('Fetch begin send:\n' + cbsReq)
  const res = await fetch(config.cbsUrl, {
    method: 'POST',
    data: cbsReq,
    auth: {
      username: config.username,
      password: config.password,
    },
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
    },
    httpsAgent: agent,
  })
  logger.info('Fetch revice:\n' + res.data)
  return res.data
}