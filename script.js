// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format('MMMM Do YYYY, h:mm:ss a');

// HTML for each hour in a day
var nineAm = document.querySelector("#nine-am");
var tenAm = document.querySelector("#ten-am");
var elevenAm = document.querySelector("#eleven-am");
var twelvePm = document.querySelector("#twelve-pm");
var onePm = document.querySelector("#one-pm");
var twoPm = document.querySelector("#two-pm");
var threePm = document.querySelector("#three-pm");
var fourPm = document.querySelector("#four-pm");
var fivePm = document.querySelector("#five-pm");
var sixPm = document.querySelector("#six-pm");

var hour = moment().hours();
var userInput;
var hourSpan;

// Date and Hour

var interval = setInterval(function(){
    var momentNow = moment();$('#currentDay').html(currentDate);
}, 100);

function initPage(){

    console.log("Current Hour " + hour);
    var init9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 am"));
    tenAm.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 am"));
    elevenAm.val(init11);

    var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
    twelvePm.val(init12);

    var init1 = JSON.parse(localStorage.getItem("01:00 pm"));
    onePm.val(init1);

    var init2 = JSON.parse(localStorage.getItem("02:00 pm"));
    twoPm.val(init2);

    var init3 = JSON.parse(localStorage.getItem("03:00 pm"));
    threePm.val(init3);

    var init4 = JSON.parse(localStorage.getItem("04:00 pm"));
    fourPm.val(init4);

    var init5 = JSON.parse(localStorage.getItem("05:00 pm"));
    fivePm.val(init5);

    var init6 = JSON.parse(localStorage.getItem("06:00 pm"));
    sixPm.val(init6);
}