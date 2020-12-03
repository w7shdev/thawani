# ThawaniClient

**Thawani HTTP API CLIENT**

Integrate your application with Thawani-pay payment gateway
This package helps to make easier integration in your web-app / application

## Feature

- Switch between environments 👍
- shortcut methods for API endpoints 👍
- Async `Promises`
- Built with `axiosjs` 🔥

## Documentation

please refer to Thawani [developer](https://developer.thawani.om/) Documentation

### install

`npm i thawani-client `

### usage

```javascript
const ThawaniClient = require("thawani-client");

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

## Disclaimer

This plugin does not do anything with Thawani the provide service it just to save time for developers 👍

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
