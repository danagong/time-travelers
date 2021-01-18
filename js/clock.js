let now = new Date();
let current = "1";
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
  $(".circle").addClass("darken");
  getTimes(now.getSeconds(), 60 * now.getMinutes(), 3600 * now.getHours());

  $("#start").click(function() {
    $(".top").hide();
    $(".leadin").show();
    $("#q-" + current).show();
     getTimes(positions[current-1][0], positions[current-1][1], positions[current-1][2]);
  });

  $("input[type='radio']").click(function() {
    $("#q-" + current + " .answer").text($("input[type='radio']:checked").val());
    $("#q-" + current + " .choices").hide();
    current++;
    
    $(".clock__second").addClass("spin");
    setTimeout(function(){
      $(".clock__second").removeClass("spin");
      $("#q-" + current).show();
      getTimes(positions[current-1][0], positions[current-1][1], positions[current-1][2]);
    }, 1000);
    
  });
});


function generateSpinner() {

}