

$(document).ready(function() {
  console.log("working");
  $("td").keypress(function() {
    $(this).css("background-color", rgb(0, 0, 255))
  });
})
