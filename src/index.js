"use strict";
// first test of CNB FX rates
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var currentDate = new Date();
var cnbDateArray;
var cnbUrl = 'http://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt';
cnbDateArray = [currentDate.getDate().toString(), (currentDate.getMonth() + 1).toString(), currentDate.getFullYear().toString()];
cnbUrl = [cnbUrl, ['date', cnbDateArray.join('.')].join('=')].join('?');
console.log(cnbUrl);
http.get(cnbUrl, function (res) {
    console.log(res.statusCode);
    if (res.statusCode === 200) {
        var data_1 = [];
        res.on('data', function (chunk) { data_1.push(chunk); });
        res.on('end', function () {
            var result = Buffer.concat(data_1).toString();
            var resultSet = result.split(/\r?\n/);
            console.log(result);
        });
    }
});
//# sourceMappingURL=c:/DEV/_NODEJS_/cnb/index.js.map