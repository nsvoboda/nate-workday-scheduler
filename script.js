$(document).ready(function() {
    $(".saveBtn").on("click", function(){
       var userInput = $(this).siblings(".form-control").val();
       var hour = $(this).parent().attr('id');
       localStorage.setItem(hour, userInput); });

    function background() {
           var momentTime = moment().hours();
           $(".input-group").each(function(){
            var timeTest = parseInt($(this).attr("id").split('-')[1]);
            if (timeTest < momentTime){
                $(this).addClass("past");
            } else if (timeTest === momentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
       }
    background();

    // interval
var interval = setInterval(background, 100)
// display current date on page
$('#currentDay').text(moment().format('dddd, MMMM Do, hh:mm:ss A'), 100)
    // using military time
$('#hour-9 .form-control').val(localStorage.getItem('hour-9'));
$('#hour-10 .form-control').val(localStorage.getItem('hour-10'));
$('#hour-11 .form-control').val(localStorage.getItem('hour-11'));
$('#hour-12 .form-control').val(localStorage.getItem('hour-12'));
$('#hour-13 .form-control').val(localStorage.getItem('hour-13'));
$('#hour-14 .form-control').val(localStorage.getItem('hour-14'));
$('#hour-15 .form-control').val(localStorage.getItem('hour-15'));
$('#hour-16 .form-control').val(localStorage.getItem('hour-16'));
$('#hour-17 .form-control').val(localStorage.getItem('hour-17'));
$('#hour-18 .form-control').val(localStorage.getItem('hour-18'));
});

var clearDay = $('#')


// Moment.js
// var currentDate = moment().format('dddd') + " " + moment().format('MMMM Do YYYY');

// // HTML for each hour in a day
// var nineAm = document.querySelector("#nine-am");
// var tenAm = document.querySelector("#ten-am");
// var elevenAm = document.querySelector("#eleven-am");
// var twelvePm = document.querySelector("#twelve-pm");
// var onePm = document.querySelector("#thirteen-pm");
// var twoPm = document.querySelector("#fourteen-pm");
// var threePm = document.querySelector("#fifteen-pm");
// var fourPm = document.querySelector("#sixteen-pm");
// var fivePm = document.querySelector("#seventeen-pm");
// var sixPm = document.querySelector("#eighteen-pm");

// var hour = moment().hours();
// var userInput;
// var hourSpan;

// // Date and Hour

// var interval = setInterval(function() {
//     var momentNow = moment();
//     $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
//   }, 100);

// function initPage(){

//     console.log("Current Hour " + hour);
//     var init9 = JSON.parse(localStorage.getItem("09:00 am"));
//     nineAm.val(init9);

//     var init10 = JSON.parse(localStorage.getItem("10:00 am"));
//     tenAm.val(init10);

//     var init11 = JSON.parse(localStorage.getItem("11:00 am"));
//     elevenAm.val(init11);

//     var init12 = JSON.parse(localStorage.getItem("12:00 pm"));
//     twelvePm.val(init12);

//     var init1 = JSON.parse(localStorage.getItem("01:00 pm"));
//     onePm.val(init1);

//     var init2 = JSON.parse(localStorage.getItem("02:00 pm"));
//     twoPm.val(init2);

//     var init3 = JSON.parse(localStorage.getItem("03:00 pm"));
//     threePm.val(init3);

//     var init4 = JSON.parse(localStorage.getItem("04:00 pm"));
//     fourPm.val(init4);

//     var init5 = JSON.parse(localStorage.getItem("05:00 pm"));
//     fivePm.val(init5);

//     var init6 = JSON.parse(localStorage.getItem("06:00 pm"));
//     sixPm.val(init6);
// }

// function background() {
//     $(".form-control").each(function(){
//         var timeTest = parseInt($(this).attr("id"));
//         hour = parseInt(hour);
//         console.log(timeTest);
//         console.log(hour);

//         if (hour > timeTest){
//             $(this).addClass("past");
//         } else if (hour < timeTest) {
//             $(this).addClass("future");
//         } else {
//             $(this).addClass("present");
//         }
//     });
// }

// $(document).ready(function(){
//     initPage()
//     background()

//     $(".saveBtn".on("click", function(){
//         userInput = $(this).siblings(".form-control").val().trim();
//         console.log(userInput);
//         hourSpan = $(this).siblings(".input-group-prepend").text().trim();
//         console.log(hourSpan);
//         localStorage.setItem(hourSpan, JSON.stringify(userInput));

//     }));

//     $("#clearDay").on("click", function(){
//         localStorage.clear();
//         initPage()
//     })
// });
