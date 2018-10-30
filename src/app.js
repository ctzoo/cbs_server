const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const logger = require('./logger')
const pkg = require('./pkg')
const unpkg = require('./unpkg')
const cbsFetch = require('./fetch')
const storage = require('./storage')
const {
  body,
  validationResult
} = require('express-validator/check')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello,This is CBS Server')
})

app.get('/list', (req, res) => {
  const key = req.query.key
  if (key === config.get('key')) {
    storage.getCbsRefNos().then(keys => res.send(keys))
  } else {
    res.send('Hello,This is CBS Server')
  }
})

const enumVaild = arr => value => arr.indexOf(value) >= 0

/**
  'accountType',
  'amount',
  'enquiryReference',
  'enquiryType',
  'productType',
  'idType',
  'idNumber',
  'customerName',
  'dateOfBirth',
  'gender',
  'maritalStatus',
  'applicantType',
  'addressType',
  'addressFormat',
  'postalCode',
  'streetName',
  'stateCityName',
  'countryCode'
 */
app.post(
  '/cbs', [
    body('accountType').exists(),
    body('amount').exists().isLength({
      min: 3
    }),
    body('enquiryReference').exists(),
    body('enquiryType').exists().custom(enumVaild(['NA', 'RV', 'GT', 'CE', 'B0', 'B1', 'B2'])),
    body('productType').exists().custom(enumVaild(['UC', 'UO', 'SC', 'DC'])),
    body('idType').exists().custom(enumVaild(['EMPL', 'NRIC', 'PASS', 'UNKN', 'WORK'])),
    body('idNumber').exists(),
    body('customerName').exists(),
    body('dateOfBirth').exists().isLength({
      min: 8,
      max: 8
    }),
    body('gender').exists().custom(enumVaild(['M', 'F', 'U'])),
    body('maritalStatus').exists().custom(enumVaild(['D', 'M', 'P', 'S', 'U', 'W'])),
    body('applicantType').exists(),
    body('addressType').exists().custom(enumVaild(['RESID', 'WORK', 'POST', 'U'])),
    body('addressFormat').exists().custom(enumVaild(['SL', 'SF'])),
    body('postalCode').exists(),
    body('streetName').exists(),
    body('stateCityName').exists(),
    body('countryCode').exists()
  ],
  async (req, res) => {
    // 验证接收的数据
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      // 组包、发送、缓存、返回
      const info = {
        id: req.body.enquiryReference,
        req: pkg(req.body),
      }
      try {
        // TODO 集群部署时，缓存如何做到无状态
        const data = await storage.getCbsEnquiryInfo(info.id, info.req)
        if (data.isErr) {
          const reqData = await cbsFetch(info.req)
          info.res = reqData
          await storage.saveCbsEnquiryInfo(info.id, info)
        } else {
          info.res = data.res
        }
      } catch (e) {
        logger.warn('Get CBS data error >>>', e)
        return res.status(500).send(e.message)
      }
      res.send(unpkg(info.res))
    } else {
      logger.warn('Client request params error >>>', errors.array())
      res.status(400).send(errors.array())
    }
  }
)

app.listen(8080)