const ThawaniClient = require("./dist/app.js");

require("dotenv").config();

const api = new ThawaniClient(
  process.env.SECRET,
  process.env.PUBLISH,
  process.env.ENV
);

// api
//   .find_session("checkout_940RmwSubopVnPj5HadK6NZ5blpUdrx0mCSOGPqDd5YVei8eTS")
//   .then((data) => {
//     console.log(data.data);
//   })
//   .catch((err) => console.error(err));
module.exports = ThawaniClient;
