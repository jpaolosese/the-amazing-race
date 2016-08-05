$(document).ready(function() {
  console.log("working");
  // $("td").click(function(e) {
  //   $(this).css("background-color", "#888888")
  //   $(this).text("clicked")
  // });
  var playerOneCount = 0;
  var playerTwoCount = 0;
  $("body").keyup(function(e) {
    if (e.keyCode === 81 || 113) {
      playerOneCount += 1;
      $("#a" + playerOneCount).css("background-color", "#FFF000");
    }
    if (e.keyCode === 80 || 112) {
      playerTwoCount += 1;
      $("#b" + playerTwoCount).css("background-color", "#000FFF");
    }
    // count += 1;
    // $("td#a" + count).css("background-color", "#777777");
  });
});
