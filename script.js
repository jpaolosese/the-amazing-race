

$(document).ready(function() {
  console.log("working");
  $("td").click(function(e) {
    $(this).css("background-color", "#888888")
    $(this).text("clicked")
  });
})
