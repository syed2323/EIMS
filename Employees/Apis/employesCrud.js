const express = require('express');
require('/Users/syedabdulahad/Documents/nodejs/EIMS/Configs.js');
const addemp = require('/Users/syedabdulahad/Documents/nodejs/EIMS/Employees/model&schema/addEmployees.js');


const app = express();

app.use(express.json());
app.post("/addemployes", async (req,resp) => {
    let data = new addemp(req.body);
    let result = await data.save();
    resp.send(result);
});

app.get("/getemployes", async (req,resp) => {
    let data = await addemp.find();
    resp.send(data);
})
app.listen(5000);