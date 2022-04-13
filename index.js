// index.js
const express = require('express');
const bodyParser = require('body-parser');
const wit_token = "XGXWKYOD6LKBTU4LX4MUDU2FTFUYJ6ST"
const axios= require('axios')



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/message', (req, res) => {
    // res.json(req.body);
    axios.get('https://api.wit.ai/message?q='+req.body['msg'] , { headers: {"Authorization" : `Bearer ${wit_token}`} })
  .then(function (response) {
    // handle success
    res.json(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
});

app.listen(4000, () => console.log(`Started server at http://localhost:4000!`));