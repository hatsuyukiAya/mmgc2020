const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();

// Load the full build.
const _ = require('lodash');

// 静态资源放行
app.use(express.static('public'));

// Exception
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});

// 创建application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// 创建application/json解析
app.use(bodyParser.json());

// router
const routerCn = require('./routerCn');
const routerJp = require('./routerJp');
app.use('/zh',routerCn);
app.use('/jp',routerJp);


// listen
app.listen(80,() => {
    console.log('Mirai-Mad-GoldenContest is runing');
    // console.log(config.user)
})

router.get('/',(req, res) => {
    res.type('.html');
    res.sendFile(__dirname + 'public/index.html');
});
