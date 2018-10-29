const level = require('level')
const crypto = require('crypto')

const db = level('./storage_cbs')
const RUN_NO_KEY = 's_run_no'
const getRefKey = refNo => 'r_' + refNo

function atomCall(fn) {
    let p = Promise.resolve()
    return (...args) => {
        p = p.then(() => fn(...args))
        return p
    }
}

function _getRunNo() {
    return db
        .get(RUN_NO_KEY)
        .then(no => db.put(RUN_NO_KEY, parseInt(no) + 1).then(() => no.toString().padStart(7, '0')))
        .catch(err => {
            if (err.notFound) {
                return db.put(RUN_NO_KEY, 1).then(() => '0000000')
            } else {
                throw err
            }
        })
}

const getRunNo = atomCall(_getRunNo)

const config = require('config').get('cbs')

/**
 * @param id 参考号
 * @param info {hash, req, res}
 * @returns {*}
 */
function saveCbsEnquiryInfo(id, info) {
    info.hash = crypto.createHash('md5').update(info.req).digest('hex')
    return db.put(getRefKey(id), JSON.stringify(info))
}

/**
 *
 * @param id 参考号
 * @param data 计算hash的数据
 * @returns {*}
 */
function getCbsEnquiryInfo(id, data) {
    return db.get(getRefKey(id))
        .then(infoStr => JSON.parse(infoStr))
        .then(info => {
            // 根据参考号查出数据，但请求内容不一致的返回异常
            const hash = crypto.createHash('md5').update(data).digest('hex')
            if (hash === info.hash)
                return info
            else
                throw new Error(`The Enquiry Reference [${id}] is not consistent with the content of the query`)
        })
        .catch(err => {
            if (err.notFound) {
                return {
                    isErr: true,
                    res: `The Enquiry Reference [${id}] is not found`
                }
            } else {
                throw err
            }
        })
}

/**
 *
 * @param key 参考号
 * @returns {*}
 */
function delCbsEnquiryInfo(key) {
    return db.del(key)
}

/**
 * 
 * @returns [string]
 */
function getCbsRefNos() {
    const keys = []
    const stream = db.createReadStream({
        keys: true,
        values: false
    })
    stream.on('data', data => {
        keys.push(data)
    })

    return new Promise((resolve, reject) => {
        stream.on('end', () => resolve(keys.filter(key => key.indexOf('r_') === 0)))
        stream.on('error', reject)
    })
}

// TODO 存储如何无状态化
module.exports = {
    getFetchSetting() {
        return getRunNo().then(rn => ({
            ...config,
            runNo: rn
        }))
    },
    saveCbsEnquiryInfo,
    getCbsEnquiryInfo,
    delCbsEnquiryInfo,
    getCbsRefNos,
}