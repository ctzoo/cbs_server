
# 接口说明  

## CBS接口  

- PATH  

  ```
  POST /cbs
  ```

- DESCRIPTION  

  Obtaining CBS(credit bureau singapore) data from the HTTP request

- HEADERS  

  content-type:application/json;charset=utf-8

- REQUEST PARAMETERS  
  
  "size" indicates the maximum length of the field allowed.

  | name             | type   | format                                   | size   | remarks                   |
  | ---------------- | ------ | ---------------------------------------- | ------ | ------------------------- |
  | accountType      | string |                                          | 5      | Account Type              |
  | amount           | string | amount + currency                        | 15,2+5 | Amount                    |
  | enquiryReference | string |                                          | 50     | Enquiry Reference         |
  | enquiryType      | string | 'NA', 'RV', 'GT', 'CE', 'B0', 'B1', 'B2' |        | Enquiry Type              |
  | productType      | string | 'UC', 'UO', 'SC', 'DC'                   |        | Product Type              |
  | idType           | string | 'EMPL', 'NRIC', 'PASS', 'UNKN', 'WORK'   |        | ID Type                   |
  | idNumber         | string |                                          | 20     | ID Number                 |
  | customerName     | string |                                          | 50     | Customer Name             |
  | dateOfBirth      | string | DDMMYYYY                                 | 8      | Date of birth             |
  | gender           | string | 'M', 'F', 'U'                            |        | Gender                    |
  | maritalStatus    | string | 'D', 'M', 'P', 'S', 'U', 'W'             |        | Marital Status            |
  | applicantType    | string |                                          | 5      | Applicant type            |
  | addressType      | string | 'RESID', 'WORK', 'POST', 'U'             | 5      | Address Type (Consumer)   |
  | addressFormat    | string | 'SL', 'SF'                               |        | Address Format - Consumer |
  | postalCode       | string |                                          | 9      | Postal Code - Consumer    |
  | streetName       | string |                                          | 160    | Street Name               |
  | stateCityName    | string |                                          | 20     | State City Name           |
  | countryCode      | string |                                          | 3      | Country Code              |

- RESPONSES  

  | status | type                  | format                                     |
  | ------ | --------------------- | ------------------------------------------ |
  | 200    | OK                    | returning a JSON object                    |
  | 400    | Bad Request           | param invalid error                        |
  | 500    | Internal Server Error | error message will be in the response body |

- Request Example  

  ```
  curl -X POST http://localhost:8080/cbs \
    -H "Content-type: application/json" \
    -d '{"accountType":"S","amount":"000000000003000.00SGD","enquiryReference":"A2018010000","enquiryType":"NA","productType":"UC","idType":"NRIC","idNumber":"S1234567Z","customerName":"TAN A B","dateOfBirth":"15091978","gender":"F","maritalStatus":"S","applicantType":"P","addressType":"RESID","addressFormat":"SL","postalCode":"999999","streetName":"SHENTON WAY","stateCityName":"Singapore","countryCode":"SGP"}'
  ```

- Response Data  
  | params | format  | remarks                               |
  | ------ | ------- | ------------------------------------- |
  | isErr  | Boolean | When true returns, getting data error |
  | items  | Array   | List of data results                  |

- Response Example  

  ```
  {
    "isErr": false,
    "items": [{
      "enquiryInfo": {
        "enquiryNo": "18185261",
        "enquiryRef": "A2017045997"
      },
      "consumerInfos": [{
        "__applicantType": "P",
        "__consumerSeq": "1",
        "summary": {
          "dateOfEarliestKnownCreditAccount": "12/10/2001",
          "previousEnquiries": "101",
          "accounts": "15",
          "defaults": "0",
          "bankruptcyProceedings": "0",
          "__noticeCount": "0",
          "securedCreditLimit": "6454065.27",
          "unsecuredCreditLimit": "0.00",
          "exemptedCreditLimit": "0.00",
          "debtManagementProgramme": "N",
          "__creditFileAge": "",
          "idTheft": "",
          "_12_BTI": ""
        },
        "personalDetails": {
          "surname": "",
          "firstName": "",
          "secondName": "",
          "foreNames": "",
          "unformattedName": "TESTER 1",
          "idType": "NRIC",
          "idNumber": "S8045703J",
          "dateOfBirth": "01/04/1978",
          "gender": "FEMAL",
          "nationality": "SGP",
          "maritalStatus": "SINGLE",
          "addresses": [{
            "postalCode": "765432",
            "dateLoaded": "18/07/2018"
          }, {
            "postalCode": "999888",
            "dateLoaded": "11/07/2018"
          }, {
            "postalCode": "765432",
            "dateLoaded": "11/07/2018"
          }]
        },
        "additionalIdentifications": [{
          "dateLoaded": "22/06/2018",
          "idType": "PASSPORT",
          "idNumber": "S8045703J"
        }],
        "additionalNames": [{
          "dateLoaded": "18/07/2018",
          "name": "TEST TDSR"
        }, {
          "dateLoaded": "11/07/2018",
          "name": "TEST0001"
        }, {
          "dateLoaded": "10/07/2018",
          "name": "TESTCC0001"
        }, {
          "dateLoaded": "06/07/2018",
          "name": "TDSR EC01"
        }, {
          "dateLoaded": "06/07/2018",
          "name": "TEST06072018-04"
        }, {
          "dateLoaded": "06/07/2018",
          "name": "TEST06072018-02"
        }, {
          "dateLoaded": "28/06/2018",
          "name": "QEIIAFC YVZQQGET IECIHW"
        }, {
          "dateLoaded": "22/06/2018",
          "name": "YEH PUIRUI"
        }, {
          "dateLoaded": "21/06/2018",
          "name": "TDSR DOWN CSL"
        }, {
          "dateLoaded": "20/06/2018",
          "name": "ZION GUNTHER"
        }, {
          "dateLoaded": "18/06/2018",
          "name": "OMG"
        }, {
          "dateLoaded": "18/06/2018",
          "name": "SO JIJI"
        }, {
          "dateLoaded": "14/06/2018",
          "name": "OMG"
        }, {
          "dateLoaded": "14/06/2018",
          "name": "ED85FCEEE97A8C6C81F46"
        }, {
          "dateLoaded": "14/06/2018",
          "name": "097054F3377B73A5DC8DBC64F767"
        }, {
          "dateLoaded": "08/06/2018",
          "name": "AMY CHUA"
        }, {
          "dateLoaded": "05/06/2018",
          "name": "ERWIN WANG JUNYONG"
        }, {
          "dateLoaded": "05/06/2018",
          "name": "DAN1"
        }, {
          "dateLoaded": "04/06/2018",
          "name": "TAN PEPPA"
        }, {
          "dateLoaded": "31/05/2018",
          "name": "LIM LAY HOON"
        }],
        "employments": [{
          "dateLoaded": "14/06/2018",
          "occupation": "FINANCIAL ANALYST-191",
          "employer": "CITIBANKUSA"
        }, {
          "dateLoaded": "08/06/2018",
          "occupation": "",
          "employer": "BULGARI SOUTH ASIA OPERA"
        }, {
          "dateLoaded": "26/04/2018",
          "occupation": "",
          "employer": "SYNTEL"
        }],
        "accountStatusHistory": [{
          "productType": "PE",
          "grantorBank": "CREDIT BUREAU HELPDESK",
          "accountType": "SINGLE ",
          "openedDate": "12/10/2001",
          "closedDate": "",
          "overdueBalance": "",
          "statusSummary": "AMMMMMMMMMMM",
          "cashAdvance": "",
          "fullPayment": ""
        }, {
          "productType": "SECURED PERSONAL LOAN",
          "grantorBank": "HSBC SINGAPORE LTD",
          "accountType": "SINGLE ",
          "openedDate": "21/10/2011",
          "closedDate": "",
          "overdueBalance": "",
          "statusSummary": "AMMMMMMMMMMM",
          "cashAdvance": "",
          "fullPayment": ""
        }, {
          "productType": "CR",
          "grantorBank": "HSBC SINGAPORE LTD",
          "accountType": "SINGLE ",
          "openedDate": "21/06/2013",
          "closedDate": "",
          "overdueBalance": "132759.73",
          "statusSummary": "DMMMMMMMMMMM",
          "cashAdvance": "",
          "fullPayment": ""
        }, {
          "productType": "UNSECURED OVERDRAFT",
          "grantorBank": "HSBC SINGAPORE LTD",
          "accountType": "SINGLE ",
          "openedDate": "13/07/2006",
          "closedDate": "",
          "overdueBalance": "735.51",
          "statusSummary": "DMMMMMMMMMMM",
          "cashAdvance": "",
          "fullPayment": ""
        }, {
          "productType": "UNSECURED OVERDRAFT",
          "grantorBank": "BANK OF CHINA",
          "accountType": "SINGLE ",
          "openedDate": "11/11/2023",
          "closedDate": "",
          "overdueBalance": "",
          "statusSummary": "F",
          "cashAdvance": "",
          "fullPayment": ""
        }, {
          "productType": "UNSECURED CREDIT CARD",
          "grantorBank": "BANK OF CHINA",
          "accountType": "SINGLE ",
          "openedDate": "11/11/2023",
          "closedDate": "",
          "overdueBalance": "1172.00",
          "statusSummary": "F",
          "cashAdvance": "N",
          "fullPayment": "N"
        }, {
          "productType": "UNSECURED CREDIT CARD",
          "grantorBank": "BANK OF CHINA",
          "accountType": "SINGLE ",
          "openedDate": "11/11/2023",
          "closedDate": "",
          "overdueBalance": "600.00",
          "statusSummary": "F",
          "cashAdvance": "N",
          "fullPayment": "N"
        }, {
          "productType": "UNSECURED CREDIT CARD",
          "grantorBank": "BANK OF CHINA",
          "accountType": "SINGLE ",
          "openedDate": "11/11/2023",
          "closedDate": "",
          "overdueBalance": "1268.00",
          "statusSummary": "F",
          "cashAdvance": "Y",
          "fullPayment": "N"
        }, {
          "productType": "PRIVATE REAL ESTATE LOAN",
          "grantorBank": "OCBC",
          "accountType": "JOINT",
          "openedDate": "02/02/2012",
          "closedDate": "",
          "overdueBalance": "",
          "statusSummary": "AAAAAAAAMMMM",
          "cashAdvance": "",
          "fullPayment": ""
        }, {
          "productType": "PE",
          "grantorBank": "OCBC",
          "accountType": "JOINT",
          "openedDate": "02/02/2012",
          "closedDate": "",
          "overdueBalance": "",
          "statusSummary": "AAAAAAAAMMMM",
          "cashAdvance": "",
          "fullPayment": ""
        }, {
          "productType": "UNSECURED CREDIT CARD",
          "grantorBank": "OCBC",
          "accountType": "SINGLE ",
          "openedDate": "15/08/2023",
          "closedDate": "",
          "overdueBalance": "",
          "statusSummary": "MM*",
          "cashAdvance": "MM-",
          "fullPayment": "MM-"
        }, {
          "productType": "PRIVATE REAL ESTATE LOAN",
          "grantorBank": "BANK OF CHINA",
          "accountType": "JOINT",
          "openedDate": "19/10/2007",
          "closedDate": "",
          "overdueBalance": "4870.78",
          "statusSummary": "BMMBMMMMMMMM",
          "cashAdvance": "",
          "fullPayment": ""
        }, {
          "productType": "UNSECURED CREDIT CARD",
          "grantorBank": "AMEX CARDS",
          "accountType": "SINGLE ",
          "openedDate": "15/08/2023",
          "closedDate": "",
          "overdueBalance": "",
          "statusSummary": "MM*",
          "cashAdvance": "MM-",
          "fullPayment": "MM-"
        }, {
          "productType": "PRIVATE REAL ESTATE LOAN",
          "grantorBank": "MAYBANK SINGAPORE LIMITED",
          "accountType": "SINGLE ",
          "openedDate": "02/04/2002",
          "closedDate": "",
          "overdueBalance": "",
          "statusSummary": "MDMMAMMMMMMM",
          "cashAdvance": "",
          "fullPayment": ""
        }, {
          "productType": "UNSECURED CREDIT CARD",
          "grantorBank": "MAYBANK SINGAPORE LIMITED",
          "accountType": "SINGLE ",
          "openedDate": "10/08/2002",
          "closedDate": "",
          "overdueBalance": "",
          "statusSummary": "*MMMMMMMMMMM",
          "cashAdvance": "-MMMMMMMMMMM",
          "fullPayment": "-MMMMMMMMMMM"
        }],
        "previousEnquiries": [{
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "19/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "18/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED CREDIT CARD"
        }, {
          "date": "18/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED CREDIT CARD"
        }, {
          "date": "18/07/2018",
          "enquiryType": "Guarantor",
          "accountType": "SINGLE ",
          "productType": "OTHER"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }, {
          "date": "11/07/2018",
          "enquiryType": "NEW APPLICATION",
          "accountType": "SINGLE ",
          "productType": "UNSECURED OVERDRAFT"
        }],
        "defaultRecords": [],
        "bankruptcyProceedings": [],
        "drsRecords": [],
        "source": {
          "source": {
            "headerText": "Bureau Scorecards utilise all available data to calculate risk estimate. This is based on analysis of the association of all the data with future adverse outcomes.",
            "vars": [{
              "name": "Score Card",
              "value": "GEN02"
            }, {
              "name": "Score",
              "value": "Not Applicable"
            }, {
              "name": "Risk Grade",
              "value": "HZ"
            }, {
              "name": "Risk Grade Description",
              "value": "Currently 90+ / write-off with outstanding balance greater than or equal to 300"
            }, {
              "name": "Probability of Default",
              "value": "Not Applicable"
            }, {
              "name": "Risk Odds",
              "value": "0.00:1"
            }]
          },
          "explanationOfSource": {
            "vars": [{
              "name": "Score Card",
              "value": "Indentifies the Scorecard used to calculate Bureau Score"
            }, {
              "name": "Score",
              "value": "The score ranges from 1000 to 2000, where individuals scoring 1000 have the highest likelihood of defaulting on a repayment, where those who score 2000 have the lowest chance of reaching a delinquency status"
            }, {
              "name": "Probability of Default",
              "value": "The probability of the consumer defaulting based on the population average, within the next 12 months."
            }, {
              "name": "Risk Odds",
              "value": "An odds-based measure of the likelihood of default within the next 12 months"
            }]
          },
          "keyFactor": {
            "vars": [{
              "name": "",
              "value": ""
            }, {
              "name": "",
              "value": ""
            }, {
              "name": "",
              "value": ""
            }, {
              "name": "",
              "value": ""
            }]
          },
          "explanationOfKeyFactor": {
            "vars": [{
              "name": "Immature Credit History",
              "value": "Immature credit history will generally contribute to the credit risk uncertainty"
            }, {
              "name": "Credit Exposure",
              "value": "The level of credit exposure will generally contribute to higher credit risk"
            }, {
              "name": "Delinquency Presence",
              "value": "The presence of the delinquency is generally indicative of higher credit risk"
            }, {
              "name": "Not Enough Clean History",
              "value": "Lack of clean credit history will generally contribute to higher credit risk"
            }, {
              "name": "Adverse Credit History",
              "value": "Adverse credit history is generally indicative of the higher credit risk"
            }, {
              "name": "Too Many Enquiries",
              "value": "The frequency and recency of credit applications may impact the credit risk assessment"
            }]
          }
        },
        "noAdverse": "No adverse information could be found on the subject.",
        "narratives": [{
          "typeCode": "PRDCH",
          "dateLoaded": "02/05/2018",
          "texts": ["As of 02-05-2018, the account opened on 21-06-2013 was changed from PR to CR"]
        }],
        "lisRerports": {
          "litigationWrits": "0",
          "bankruptcyPetitions": "0",
          "disclaimer": ["You have requested an additional search of the Litigation Writ and Bankruptcy Petition Database which is derived from publicly available Court records.", "This information does not form part of the CBS credit report and is a separate service provided at your request.", "", "Any information recorded below is based on a match to the ID of the subject and is provided as at the filing date of the write and/or petition. The information", "may not reflect the current status or details of the writ and/or petition.", "", "Users of this service is advised to seek an updated status of any writ and/or petition displayed.  We do not advise using writ and/or petition data", "in isolation for credit assessment purposes.", "", "No liability attaches to us with respect to the collation or supplying of the information or any use made of it and whether in relation to its accuracy or", "completeness or any other matter whatsoever. We are entitled to indemnity from you against any claims or loss made or sustained in consequence of the", "provision of Litigation Writ and Bankruptcy Petition Information."],
          "lisReports": [{
            "idType": "NRIC",
            "idNumber": "S8045703J",
            "litigationWrits": [],
            "bankruptcyPetitions": []
          }, {
            "idType": "PASSPORT",
            "idNumber": "S8045703J",
            "litigationWrits": [],
            "bankruptcyPetitions": []
          }]
        },
        "aggosbalances": [{
          "osbDate": "06/2018",
          "securedBalances": "11157222.66",
          "unsecuredInterestBearingBalances": "8445.32",
          "unsecuredNonInterestBearingBalances": "2020.00",
          "exemptedBalances": "100000.00"
        }, {
          "osbDate": "05/2018",
          "securedBalances": "11060331.56",
          "unsecuredInterestBearingBalances": "10999.66",
          "unsecuredNonInterestBearingBalances": "0.00",
          "exemptedBalances": "100000.00"
        }, {
          "osbDate": "04/2018",
          "securedBalances": "11248564.68",
          "unsecuredInterestBearingBalances": "0.00",
          "unsecuredNonInterestBearingBalances": "0.00",
          "exemptedBalances": "100000.00"
        }, {
          "osbDate": "03/2018",
          "securedBalances": "11060331.56",
          "unsecuredInterestBearingBalances": "0.00",
          "unsecuredNonInterestBearingBalances": "0.00",
          "exemptedBalances": "100000.00"
        }, {
          "osbDate": "02/2018",
          "securedBalances": "11248564.68",
          "unsecuredInterestBearingBalances": "0.00",
          "unsecuredNonInterestBearingBalances": "0.00",
          "exemptedBalances": "100000.00"
        }, {
          "osbDate": "01/2018",
          "securedBalances": "11060333.99",
          "unsecuredInterestBearingBalances": "23837.15",
          "unsecuredNonInterestBearingBalances": "0.00",
          "exemptedBalances": "100000.00"
        }],
        "mibalances": [{
          "mibDate": "06/2018",
          "propJntMib": "60819.62",
          "propSgleMib": "15500.24",
          "nonPropSecJntMib": "5000.00",
          "nonPropSecSgleMib": "5000.00",
          "unsecuredMib": "401.00",
          "exemptedUnsecMib": "10000.00"
        }, {
          "mibDate": "05/2018",
          "propJntMib": "60111.62",
          "propSgleMib": "15500.24",
          "nonPropSecJntMib": "5000.00",
          "nonPropSecSgleMib": "5000.00",
          "unsecuredMib": "10999.66",
          "exemptedUnsecMib": "10000.00"
        }, {
          "mibDate": "04/2018",
          "propJntMib": "62533.90",
          "propSgleMib": "15500.24",
          "nonPropSecJntMib": "5000.00",
          "nonPropSecSgleMib": "5000.00",
          "unsecuredMib": "0.00",
          "exemptedUnsecMib": "10000.00"
        }, {
          "mibDate": "03/2018",
          "propJntMib": "60111.62",
          "propSgleMib": "15500.24",
          "nonPropSecJntMib": "5000.00",
          "nonPropSecSgleMib": "5000.00",
          "unsecuredMib": "0.00",
          "exemptedUnsecMib": "10000.00"
        }, {
          "mibDate": "02/2018",
          "propJntMib": "62533.90",
          "propSgleMib": "15500.24",
          "nonPropSecJntMib": "5000.00",
          "nonPropSecSgleMib": "5000.00",
          "unsecuredMib": "0.00",
          "exemptedUnsecMib": "10000.00"
        }, {
          "mibDate": "01/2018",
          "propJntMib": "60111.62",
          "propSgleMib": "165688.52",
          "nonPropSecJntMib": "5000.00",
          "nonPropSecSgleMib": "5000.00",
          "unsecuredMib": "23837.15",
          "exemptedUnsecMib": "10000.00"
        }]
      }],
      "disclaimer": "This information has been collated from various sources and does not represent the opinion of Credit Bureau (Singapore) Pte Ltd. No liability (in tort contract or otherwise howsoever) attaches to us with respect to the collation or supplying of the information or any use made of it and whether in relation to its accuracy or completeness or any other matter whatsoever. The information is supplied on a confidential basis to you and not for the use of any other party save of any person on whose behalf you have sought the information. We are entitled to indemnity from you against any claims or loss made or sustained in consequence of the provision of the information sought. Credit Bureau (Singapore) Pte Ltd scores are based on samples of historical information in our database and we do not warrant the accuracy of that information. Credit Bureau (Singapore) Pte Ltd uses reasonable efforts to ensure that samples are statistically valid, and that proven methods are used to develop scores. A score is not a replacement for any other information, or for decision making policies and procedures. Accordingly, Credit Bureau (Singapore) Pte Ltd does not accept liability for any decision you make using a score."
    }]
  }
  ```
