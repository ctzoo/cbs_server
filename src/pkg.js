const xlsxFieldNames = [
  'accountType',
  'amount',
  'currency',
  'enquiryReference',
  'enquiryType',
  'productType',
  'idType',
  'idNumber',
  'customerName',
  'yearOfBirth',
  'monthOfBirth',
  'dayOfBirth',
  'gender',
  'maritalStatus',
  'applicantType',
  'addressType',
  'addressFormat',
  'postalCode',
  'streetName',
  'stateCityName',
  'countryCode',
  'blkHseBldgNumber',
  'storeyNumber',
  'unitNumber',
  'buildingName'
]

const reqXmlNoRequired = {
  blkHseBldgNumber: '<CAD1>{blkHseBldgNumber}</CAD1>',
  storeyNumber: '<CAD2>{storeyNumber}</CAD2>',
  unitNumber: '<CAD3>{unitNumber}</CAD3>',
  buildingName: '<CAD5>{buildingName}</CAD5>',
}

const reqXml = `<?xml version="1.0" encoding="utf-8"?>
<REQUEST>
  <SERVICE>ENQLITSC</SERVICE>
  <ACTION>A</ACTION>
  <MESSAGE>
    <HEADER>
      <CLIENT_ID>{clientId}</CLIENT_ID>
      <USER_ID>{userId}</USER_ID>
      <VERSION_NO>3.0</VERSION_NO>
      <RUN_NO>{runNo}</RUN_NO>
      <TOT_ITEMS>1</TOT_ITEMS>
    </HEADER>
    <ENQUIRY>
      <ENQUIRY_TYPE>{enquiryType}</ENQUIRY_TYPE>
      <ENQUIRY_REFERENCE>{enquiryReference}</ENQUIRY_REFERENCE>
      <PRODUCT_TYPE>{productType}</PRODUCT_TYPE>
      <ACCOUNT_TYPE>{accountType}</ACCOUNT_TYPE>
      <AMOUNT>{amount}</AMOUNT>
      <CURRENCY>{currency}</CURRENCY>
      <NO_OF_APPLICANTS>1</NO_OF_APPLICANTS>
      <APPLICANT>
        <CTYP>{applicantType}</CTYP>
        <CONSUMER>
          <CID>
            <CID1>{idType}</CID1>
            <CID2>{idNumber}</CID2>
          </CID>
          <CNAM>
            <CNMU>{customerName}</CNMU>
          </CNAM>
          <CDOB>
            <DBY>{yearOfBirth}</DBY>
            <DBM>{monthOfBirth}</DBM>
            <DBD>{dayOfBirth}</DBD>
          </CDOB>
          <CGND>{gender}</CGND>
          <CADR>
            <CADF>{addressFormat}</CADF>
            <CADT>{addressType}</CADT>
            <CAD7>{postalCode}</CAD7>
            <CAD4>{streetName}</CAD4>
            <CAD8>{stateCityName}</CAD8>
            <CAD9>{countryCode}</CAD9>
            {blkHseBldgNumber}
            {storeyNumber}
            {unitNumber}
            {buildingName}
          </CADR>
          <CMAR>{maritalStatus}</CMAR>
        </CONSUMER>
      </APPLICANT>
    </ENQUIRY>
  </MESSAGE>
</REQUEST>`

module.exports = (data) => {
  data.yearOfBirth = data.dateOfBirth.slice(4)
  data.monthOfBirth = data.dateOfBirth.slice(2, 4)
  data.dayOfBirth = data.dateOfBirth.slice(0, 2)
  data.currency = data.amount.slice(data.amount.length - 3, data.amount.length)
  const amt = data.amount.replace(/^0*/, '')
  data.amount = amt.slice(0, amt.length - 3)
  // console.log(data)
  const reqXmlTmp = Object.keys(reqXmlNoRequired)
    .reduce((s, e) => s.replace(`{${e}}`, (data[e] && data[e] !== '') ? reqXmlNoRequired[e] : ''), reqXml)
  // console.log(reqXmlTmp)
  return Object.keys(data).reduce((s, e) => s.replace(`{${e}}`, data[e]), reqXmlTmp)
}