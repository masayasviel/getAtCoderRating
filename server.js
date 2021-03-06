const express = require('express');
const https = require('https');
const app = express();
const cors = require('cors');
const regex = /[0-9]+/;
const baseUrl = "https://atcoder.jp/users/";

app.use(cors());

app.get('/', (req, res) => {
  const username = req.query.username||"tourist";
  const url = baseUrl + username;
  https.get(url, _res => {
    let html = "";
    _res.on("data", line => html += line);
    _res.on("end", () => {
      const elementArray = html.split("\n");
      const hoge = elementArray.filter(element => element.includes("Rating"));
      let rate = "no rate";
      if(hoge.length != 0) rate = hoge[0].match(regex)[0];
      res.send(JSON.stringify({rating: rate}));
    });
  });
});

const server = app.listen(3000, ()=>console.log("イエッタイガー！"));