//Display Current Date at Top of Calendar
var date = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").append(date);

//Make Date Block's color-coded based on Past, Present, or Future
var checkTime = function() {
//Current Hour (Military Time)
var time =moment().format ("HH");

    //for 9
    if (time < 9) {
        $("#9am").addClass("future");
    }

    else if (time == 9) {
        $("#9am").addClass("present");
    }

    else {
        $("#9am").addClass("past");
    }

    //for 10
    if (time < 10) {
        $("#10am").addClass("future");
    }

    else if (time == 10) {
        $("#10am").addClass("present");
    }

    else {
        $("#10am").addClass("past");
    }

    // for 11
    if (time < 11) {
        $("#11am").addClass("future");
    }

    else if (time == 11) {
        $("#11am").addClass("present");
    }

    else {
        $("#11am").addClass("past");
    }

    // for 12
    if (time < 12) {
        $("#12pm").addClass("future");
    }

    else if (time == 12) {
        $("#12pm").addClass("present");
    }

    else {
        $("#12pm").addClass("past");
    }

    // for 1 (13)
    if (time < 13) {
        $("#1pm").addClass("future");
    }

    else if (time == 13) {
        $("#1pm").addClass("present");
    }

    else {
        $("#1pm").addClass("past");
    }

    // for 2 (14)
    if (time < 14) {
        $("#2pm").addClass("future");
    }

    else if (time == 14) {
        $("#2pm").addClass("present");
    }

    else {
        $("#2pm").addClass("past");
    }

    // for 3 (15)
    if (time < 15) {
        $("#3pm").addClass("future");
    }

    else if (time == 15) {
        $("#3pm").addClass("present");
    }

    else {
        $("#3pm").addClass("past");
    }

    // for 4 (16)
    if (time < 16) {
        $("#4pm").addClass("future");
    }

    else if (time == 16) {
        $("#4pm").addClass("present");
    }

    else {
        $("#4pm").addClass("past");
    }

    // for 5 (17)
    if (time < 17) {
        $("#5pm").addClass("future");
    }

    else if (time == 17) {
        $("#5pm").addClass("present");
    }

    else {
        $("#5pm").addClass("past");
    }
}
    //Check Time when page loads
checkTime();
    //Check Time every minute
setInterval(checkTime, [60000]);


//On time block click, enter an event into each time block

//on save button click, save time block text to local storage

