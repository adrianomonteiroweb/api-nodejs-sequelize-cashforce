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

    - To create a new buyer, it must also contain the following attributes for buyer, cnpj and company type.

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
