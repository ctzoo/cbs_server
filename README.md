
# 接口说明  

## CBS接口  

- PATH  

  ```
  POST /cbs
  ```

- DESCRIPTION  

  Retrieves Person data from MyInfo based on UIN/FIN using authorisation token. Note - null values indicate that the field is unavailable

- HEADERS  

  content-type:application/json;charset=utf-8

- REQUEST PARAMETERS  

  | name             | type   | format                                   | remarks                   |
  | ---------------- | ------ | ---------------------------------------- | ------------------------- |
  | accountType      | string |                                          | Account Type              |
  | amount           | string | amount + currency                        | Amount                    |
  | enquiryReference | string |                                          | Enquiry Reference         |
  | enquiryType      | string | 'NA', 'RV', 'GT', 'CE', 'B0', 'B1', 'B2' | Enquiry Type              |
  | productType      | string | 'UC', 'UO', 'SC', 'DC'                   | Product Type              |
  | idType           | string | 'EMPL', 'NRIC', 'PASS', 'UNKN', 'WORK'   | ID Type                   |
  | idNumber         | string |                                          | ID Number                 |
  | customerName     | string |                                          | Customer Name             |
  | dateOfBirth      | string | DDMMYYYY                                 | Date of birth             |
  | gender           | string | 'M', 'F', 'U'                            | Gender                    |
  | maritalStatus    | string | 'D', 'M', 'P', 'S', 'U', 'W'             | Marital Status            |
  | applicantType    | string |                                          | Applicant type            |
  | addressType      | string | 'RESID', 'WORK', 'POST', 'U'             | Address Type (Consumer)   |
  | addressFormat    | string | 'SL', 'SF'                               | Address Format - Consumer |
  | postalCode       | string |                                          | Postal Code - Consumer    |
  | streetName       | string |                                          | Street Name               |
  | stateCityName    | string |                                          | State City Name           |
  | countryCode      | string |                                          | Country Code              |

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

 - Response Example  

  ```
  
  ```
