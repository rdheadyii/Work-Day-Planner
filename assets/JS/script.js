// Function to run the JS once page has rendered
$(function () {

  // event listener to save time and user input to local storage
  $(".saveBtn").on("click", function() {
    var time = $(this).siblings(".hour").text();
    var userInput = $(this).siblings(".description").val();

    localStorage.setItem(time, userInput)
  });

// applies CSS by comapring current hour to the id number for hour
  $(".time-block").each(function() {
    var timeDay = dayjs().get("hour");
    var timeNow = parseInt($(this).attr("id"));

    if (timeNow > timeDay) {
      $(this).addClass("future");
    } else if (timeNow === timeDay) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });

// grabs user input from localstorage and adds it to page
  $(".hour").each(function() {
    var hour = $(this).text();
    var currInput = localStorage.getItem(hour);

    if(currInput !== null) {
      $(this).siblings(".description").val(currInput)
    }
  });

  // displays current date to page
  $("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"));
});
