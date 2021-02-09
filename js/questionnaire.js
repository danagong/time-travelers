let now = new Date();
let current = "1";
let score = 0;
let positions = [[50, 60 * 51, 3600 * 10], [10, 60 * 11, 3600 * 2], [13, 60 * 19, 3600 * 4], [36, 60 * 39, 3600 * 8]];

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
    // $(".top").hide();
    $(".leadin").show();
    $("#q-" + current).show();
     getTimes(positions[current-1][0], positions[current-1][1], positions[current-1][2]);
  });

  $("input[type='radio']").click(function() {
    
    score += parseInt($("input[type='radio']:checked").val());
    let elId = $("input[type='radio']:checked").prop("id");
    let labelName = $("#q-" + current + " label[for='" + elId + "']").text();
    $("#q-" + current + " .answer").text(labelName);
    $("#q-" + current + " .choices").hide();
    current++;
    
    $(".clock__second").addClass("spin");

    if (current == 5) {
      $(".clock").hide();
      $(".spinner").show();
      $(".spinner").css("display", "flex");

      let lighten = score > 5;
      let result;
      let spinText = "<div class='spinner__outline'>";
      for (let i = 0; i < 12; i++) {
        spinText += "<div class='circle'></div>";
      }
      spinText += "<p class='result book'></p></div>";
       $(".spinner").append(spinText);

      if (lighten) {
        $(".circle").addClass("lighten");
        result = "YOU MOVE TOWARDS TIME";
        $(".result").addClass("result__lighten");
      } else {
        $(".circle").addClass("darken");
         result = "TIME MOVES TOWARDS YOU";
        $(".result").addClass("result__darken");
      }
      $(".question-section").css("opacity","0.2");
      $(".leadin").css("display", "none");
       setTimeout(function(){
        $(".result").text(result);
      }, 1000);

    } else {
      setTimeout(function(){
      $(".clock__second").removeClass("spin");
      $("#q-" + current).show();
      getTimes(positions[current-1][0], positions[current-1][1], positions[current-1][2]);
    }, 1000);
    }  
  });
});