let now = new Date();
let next = "1";
let positions = [[50, 60 * 51, 3600 * 10], [10, 60 * 11, 3600 * 2], [36, 60 * 39, 3600 * 8], [13, 60 * 19, 3600 * 4]];

function setTime(left, hand) {
  $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
}

function getTimes(s, m, h) {
  setTime(s, "second");
  setTime(m, "minute");
  setTime(h, "hour");
}


$(document).ready(function() {

  getTimes(now.getSeconds(), 60 * now.getMinutes(), 3600 * now.getHours());

  $("#start").click(function() {
    $(".top").hide();
    $(".leadin").show();
    $("#q-" + next).show();
     getTimes(positions[next-1][0], positions[next-1][1], positions[next-1][2]);
     next = "2";
  });

  $("input[name=agreement]:radio").click(function() {
     // setTime(0, "second");
    $(".clock__second").addClass("spin");
    setTimeout(function(){
      $(".clock__second").removeClass("spin");
      // $(".spin").css("animation-play-state", "paused");
      $("#q-" + next).show();
      getTimes(positions[next-1][0], positions[next-1][1], positions[next-1][2]);
      next++;
    }, 1000);
    
  });
});