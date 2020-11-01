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



//on save button click, save time block text to local storage

// For 9
$("#btn-9").on("click", function() {
    var task9 = $(".timeblock-9").val();
    localStorage.setItem("timeblock-9", task9);
})


// For 10
$("#btn-10").on("click", function() {
    var task10 = $(".timeblock-10").val();
    localStorage.setItem("timeblock-10", task10);
})

// For 11
$("#btn-11").on("click", function() {
    var task10 = $(".timeblock-11").val();
    localStorage.setItem("timeblock-11", task10);
})

// For 12
$("#btn-12").on("click", function() {
    var task10 = $(".timeblock-12").val();
    localStorage.setItem("timeblock-12", task10);
})

// For 1
$("#btn-1").on("click", function() {
    var task10 = $(".timeblock-1").val();
    localStorage.setItem("timeblock-1", task10);
})

// For 2
$("#btn-2").on("click", function() {
    var task10 = $(".timeblock-2").val();
    localStorage.setItem("timeblock-2", task10);
})

// For 3
$("#btn-10").on("click", function() {
    var task10 = $(".timeblock-10").val();
    localStorage.setItem("timeblock-10", task10);
})

// For 4
$("#btn-4").on("click", function() {
    var task10 = $(".timeblock-4").val();
    localStorage.setItem("timeblock-4", task10);
})

// For 5
$("#btn-5").on("click", function() {
    var task10 = $(".timeblock-5").val();
    localStorage.setItem("timeblock-5", task10);
})

//When loads, get tasks from local storage
var getTasks = function() {
    //For 9
    var savedTask9 = localStorage.getItem("timeblock-9")
    $(".timeblock-9").append(savedTask9);

    //For 10
    var savedTask10 = localStorage.getItem("timeblock-10")
    $(".timeblock-10").append(savedTask10);

    //For 11
    var savedTask11 = localStorage.getItem("timeblock-11")
    $(".timeblock-11").append(savedTask11);

    //For 12
    var savedTask12 = localStorage.getItem("timeblock-12")
    $(".timeblock-12").append(savedTask12);

    //For 1
    var savedTask1 = localStorage.getItem("timeblock-1")
    $(".timeblock-1").append(savedTask1);

    //For 2
    var savedTask2 = localStorage.getItem("timeblock-2")
    $(".timeblock-2").append(savedTask2);

    //For 3
    var savedTask3 = localStorage.getItem("timeblock-3")
    $(".timeblock-3").append(savedTask3);

    //For 4
    var savedTask4 = localStorage.getItem("timeblock-4")
    $(".timeblock-4").append(savedTask4);

    //For 5
    var savedTask5 = localStorage.getItem("timeblock-5")
    $(".timeblock-5").append(savedTask5);
}

getTasks()