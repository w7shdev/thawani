const ThawaniClient = require('./dist/app.js')
require('dotenv').config()

class a {} 
console.log(a)
// console.log(app)
let x  = new ThawaniClient(process.env.SECRET , process.env.PUBLISH, process.env.ENV)
console.log(x.get_endpoint())
// console.log(x.getCustomers());