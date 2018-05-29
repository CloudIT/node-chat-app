const moment = require('moment');
// Jan 1st 1970 00:00:00


// var date = new Date();
// var months = ['Jan', 'Feb', 'Mar', 'Apr'];
// console.log(date.getMonth());

var date = moment();
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY h:mm:ss A'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var createdAt = 1234;
var newDate = moment(createdAt);
console.log(newDate.format('h:mm a'))
