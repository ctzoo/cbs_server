const storage = require('./storage')

storage.delCbsEnquiryInfo('').then(() => console.log('the end'))
storage.getCbsRefNos().then(keys => keys.forEach(storage.delCbsEnquiryInfo)).then(() => console.log('the end'))