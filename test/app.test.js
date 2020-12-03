const ThawaniClient = require("../index");
require("dotenv").config();

const api = new ThawaniClient(
  process.env.SECRET,
  process.env.PUBLISH,
  process.env.ENV
);
test("Type of module", () => {
  expect(typeof api).toBe("object");
});

test("Test the integration in development environment", () => {
  expect(api.endpoint()).toBe(process.env.Thawani_NODE_API_DEV_URI);
});

let customer_token = null;
test("Create a Customer", async () => {
  const { data } = await api.create_customer({
    client_customer_id: "Muhannad.alrisi@gmail.com",
  });
  customer_token = data.data.id;
  expect(data.success).toBe(true);
});

let new_session = null;
test("Create a new Session", async () => {
  const payload = {
    client_reference_id: "123123990",
    customer_id: customer_token,
    products: [
      {
        name: "Mobile Phone",
        unit_amount: 2000,
        quantity: 3,
      },
      {
        name: "Kage",
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
  const { data } = await api.create_session(payload);

  expect(data.success).toBe(true);

  new_session = data.data.session_id;
});

test("get session token", async () => {
  const { data } = await api.find_session(new_session);
  expect(data.success).toBe(true);
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
  const { data } = await api.findAll_sessions();
  expect(data.success).toBe(true);
});
