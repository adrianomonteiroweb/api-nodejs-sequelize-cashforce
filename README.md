# API NODEJS E SEQUELIZE - CASHFORCE

### HOW TO RUN THE APPLICATION

- yarn
  - Este projeto utiliza-se do gerenciador de pacotes yarn e por isso é necessária a ação de instalação dos pacotes de dependência com o comando a seguir:

```bash
yarn install
```

- .env

  - Use the .env.example file to locally configure the server, as well as database and other settings.

- api

  - To run the server locally, just run the following command. It will use nodemon and ts-node packages.

  ```bash
    yarn dev:api
  ```

  - To run the server in production/build, run the following command:

  ```bash
    yarn start:api
  ```

  ### ROUTES

  - Buyers - Method "POST" - route: "/buyers".

    - To create a new buyer, it must also contain the following attributes for buyer, cnpj and company type too.

    Ex:

    ```json
    {
      "name": "SACADO 004",
      "tradingName": "SACADO 004 LTDA",
      "cashforceTax": "0",
      "responsibleName": "",
      "responsibleEmail": "",
      "responsiblePosition": "",
      "responsiblePhone": "",
      "responsibleMobile": "",
      "website": "",
      "postalCode": "",
      "address": "",
      "number": "",
      "complement": "",
      "neighborhood": "",
      "city": "",
      "state": "",
      "phoneNumber": "",
      "situation": "",
      "situationDate": "",
      "confirm": 4,
      "email": "",
      "cnpj": "00000000000010",
      "companyType": "1"
    }
    ```

  - CNPJs - Method "POST" - route: "/cnpjs".

    - To create a new CNPJ, it must also contain the following attributes: cnpj and company type.

    Ex:

    ```json
    {
      "cnpj": "00000000000001",
      "companyType": "1"
    }
    ```

  - Users - Method "POST" - route: "/users".

    - To create a new user, it must also contain the following attributes:

    Ex:

    ```json
    {
      "name": "user 1",
      "email": "user1@email.com",
      "phoneNumber": "",
      "mobile": "",
      "departament": "",
      "verificationCode": "",
      "emailChecked": 0,
      "cashforceAdm": 0
    }
    ```

  - Sponsors - Method "POST" - route: "/sponsors".

    - To create a new Sponsor, it must also contain the following attributes for Sponsor, cnpj and company type too.

    Ex:

    ```json
    {
      "name": "Sponsor 1",
      "tradingName": "",
      "cashforceTax": "",
      "responsibleName": "",
      "responsibleEmail": "",
      "responsiblePosition": "",
      "responsiblePhone": "",
      "responsibleMobile": "",
      "website": "",
      "postalCode": "",
      "address": "",
      "number": "",
      "complement": "",
      "neighborhood": "",
      "city": "",
      "state": "",
      "bank": "",
      "bankAgency": "",
      "account": "",
      "phoneNumber": "",
      "situation": "",
      "situationDate": "",
      "email": "",
      "cnpj": "00000000000011",
      "companyType": "1"
    }
    ```
