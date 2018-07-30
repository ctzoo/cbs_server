const fetch = require('axios').default
const storage = require('./storage')

module.exports = async function cbsFetch(data) {
  const config = await storage.getFetchSetting()
  const cbsReq = data
    .replace('{clientId}', config.clientId)
    .replace('{userId}', config.userId)
    .replace('{runNo}', config.runNo)

  console.log('begin send:\n' + cbsReq)
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
  })
  console.log('revice:\n' + res.data)
  return res.data
}