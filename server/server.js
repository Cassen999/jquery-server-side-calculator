const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(express.static('server/public'));

let equasion = [];

app.get('/getEquasion', (req, res) => {
    // console.log('Sending equasion');
    res.send(equasion);
})

app.post('/sendEquasion', (req, res) => {
    // calculation logic
    let calcData = req.body
    switch(calcData.operator) {
        // add key value pair to send all info in one object
        case '+':
            calcData.result = Number(calcData.num1) + Number(calcData.num2);
            break;
        case '-':
            calcData.result = Number(calcData.num1) - Number(calcData.num2);
            break;
        case '*':
            calcData.result = Number(calcData.num1) * Number(calcData.num2);
            break;
        case '/':
            calcData.result = Number(calcData.num1) / Number(calcData.num2);
            break;
    }
    console.log(equasion);
    console.log('Calc data: ', calcData);
    equasion.push(calcData)
    console.log('Received POST data');
    res.send(equasion);
})







app.listen(port, () => {
    console.log(`Server starting on port ${port}...`);
});