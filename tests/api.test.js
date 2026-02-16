const request = require("supertest");
const app = require("../server");

describe("Finance API Tests",()=>{

 test("Dashboard API", async ()=>{
  const res = await request(app).get("/api/dashboard");
  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty("balance");
 });

 test("Expense Create + Fetch", async ()=>{
  await request(app)
   .post("/api/expenses")
   .send({title:"Food",amount:100});

  const res = await request(app).get("/api/expenses");
  expect(res.body.length).toBeGreaterThan(0);
 });

 test("Income Create + Fetch", async ()=>{
  await request(app)
   .post("/api/income")
   .send({source:"Job",amount:500});

  const res = await request(app).get("/api/income");
  expect(res.body.length).toBeGreaterThan(0);
 });

});
