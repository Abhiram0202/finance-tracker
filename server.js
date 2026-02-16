const express = require("express");
const app = express();
app.use(express.json());

let expenses = [];
let income = [];

app.get("/api/dashboard",(req,res)=>{
    const totalExpense = expenses.reduce((a,b)=>a+b.amount,0);
    const totalIncome = income.reduce((a,b)=>a+b.amount,0);
    res.json({totalExpense,totalIncome,balance: totalIncome-totalExpense});
});

app.post("/api/expenses",(req,res)=>{
    expenses.push(req.body);
    res.status(201).json(req.body);
});

app.get("/api/expenses",(req,res)=> res.json(expenses));

app.post("/api/income",(req,res)=>{
    income.push(req.body);
    res.status(201).json(req.body);
});

app.get("/api/income",(req,res)=> res.json(income));

module.exports = app;
