# ThawaniClient

**Thawani HTTP API CLIENT**

Integrate your application with Thawani-pay payment gateway
This package helps to make easier integration in your web-app / application

## Feature

- Switch between environments 👍
- shortcut methods for API endpoints 👍
- Async `Promises`
- Built with `axiosjs` 🔥
- Fast ✈️

## Documentation

please refer to Thawani [developer](https://developer.thawani.om/) Documentation

### install

`npm i thawani-node `

### usage

```javascript
const ThawaniClient = require("thawani-node");

const api = new ThawaniClient(
  "your_secret_key",
  "your_publishable_key",
  "dev|prod"
);

api
  .create_customer({
    client_customer_id: "Muhannad.alrisi@gmail.com",
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
```

#### Customer API

The following methods/functions are performing the customer endpoint API

##### Find a customer

Get a single customer by passing the the customer `token`

```javascript
api
  .find_customer((customer_token: string))
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

##### Get all customers

Get all customers please refer to the `Developer Docs`

```javascript
api
  .findAll_customers()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

or

```javascript
api
  .findAll_customers({ skip: 1, limit: 10 })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

##### Create customer

Create a new customer

```js
api
  .create_customer({
    client_customer_id: "Muhannad.alrisi@gmail.com",
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));
```

##### Delete customer

To delete a customer

```js
api
  .delete_customer(customer_key)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

#### Session API

The following functions/methods are related to Session endpoint
please refer to the developer docs

##### Create a session

Create a session to get the session token to use it later for the payment process

```js
api
  .create_session(payload)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

#### Find a session

to get the information about a session by passing the `session id`

```js
api
  .find_session(session_id)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

### Get all Sessions

To get all the sessions

```javascript
api
  .findAll_sessions()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

or

```javascript
api
  .findAll_sessions({ skip: 1, limit: 10 })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

##### Redirect to pay

pass the session id after a success creation to get the full path
for the payment API

```js
const full_redirect_uri = api.get(session_id);
```

##### Payments methods

the following API are related to the customer payments methods
please refer to the developer docs

##### Get customer payment method

To get customer payment method

```js
api
  .get_customer_payment({
    customerId: "customer_id",
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

##### Remove customer payment method

To remove customer payment methods

```js
api
  .remove_customer_payment(card_token)
  .then((data) => console.log(data))
  .ctach((err) => console.error(err));
```

## Credits

- [Muhannad Al-Risi](https://alrisi.net) - package developer

## LICENCE

MIT License Copyright (c) 2020 Muhannad

Permission is hereby granted, free of
charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice
(including the next paragraph) shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
