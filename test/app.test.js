const { default: computeSourceMap } = require("sucrase/dist/computeSourceMap");
const ThawaniClient = require("../index");
require("dotenv").config();

const api = new ThawaniClient({
  secretKey: process.env.SECRET, 
  publishableKey : process.env.PUBLISH,
  dev : true
});
test("Type of module", () => {
  expect(typeof api).toBe("object");
});

test("Test the integration in development environment", () => {
  expect(api.endpoint()).toBe(process.env.Thawani_NODE_API_DEV_URI);
});

test("Check if the customer is mapped to Customer class" , () => { 
  expect(typeof api.customer).toBe("object");
})

let customer_token = null;
test("Create a Customer", async () => {
  const response = await api.customer.create('Muhannad.alrisi@gmail.com'); 
  customer_token = response.data.id;
  expect(response.success).toBe(true);
});

let new_session = null;
test("Create a new Session", async () => {
  const payload = {
    client_reference_id: "2021293168",
    products: [
      {
        name: "Mobile Phone 120",
        unit_amount: 2000,
        quantity: 3,
      },
      {
        name: "Cover",
        unit_amount: 1500,
        quantity: 1,
      },
    ],
    success_url: "https://alrisi.net",
    cancel_url: "https://alrisi.net",
    metadata: {
      customer: "Muhannad AL-Risi",
      order_id: 10,
    },
  };
  const  response = await api.session.create(payload);

  expect(response.success).toBe(true);

  new_session = response.data.session_id;
});

test("get session token", async () => {
  const  response  = await api.session.findSessionByID(new_session);
  expect(response.success).toBe(true);
});

test("Redirection Route to payment gateway", () => {
  const expected_redirect = api.redirect(new_session);
  const toBe_redirect =
    process.env.Thawani_NODE_API_DEV_URI +
    "/pay/" +
    new_session +
    "?key=" +
    process.env.PUBLISH;
  expect(expected_redirect).toBe(toBe_redirect);
});

test("get all  session token", async () => {
  const  response = await api.session.findAll();
  expect(response.success).toBe(true);
});
