questionaire(); // for avoiding naming issue




function questionaire(){
    var q1 = [1, "Time is money."];
    var q2 = [2, "Time is measured by the clock"];
    var q3 = [3, "You would rather be late for your next meeting than cut the flow of your current discussion."];
    var q4 = [4, "Silence is uncomfortable"];
    var a = ["Strongly Agree","Slightly Agree","Neutral","Disagree"],an=[];


    var q_1 = "<p class='smalltext' data-aos='fade-in'><b>"+q1[1]+"</b></p><form id='question"+q1[0]+"'data-aos='fade-in'><input type='radio' name='q1' value=0> Strongly Agree<br><input type='radio' name='q1' value=1> Slightly Agree<br><input type='radio' name='q1' value=2> Neutral<br><input type='radio' name='q1' value=3> Disagree</form>";

    document.getElementById("q1").innerHTML = q_1;

    d3.select("#q1").on("change", function () {
        a1 = d3.select('input[name="q1"]:checked').property("value");
        an.push(+a1);
        var section = 1;
        document.getElementById("q1").innerHTML = "<p class='smalltext' style='color:#404040;'>"+q1[1]+"<br><br>"+a[a1]+"</p>"

        var q = "<p class='smalltext' data-aos='fade-in'><b>"+q2[1]+"</b></p><form id='question"+q2[0]+"'data-aos='fade-in'><input type='radio' name='q2' value=0> Strongly Agree<br><input type='radio' name='q2' value=1> Slightly Agree<br><input type='radio' name='q2' value=2> Neutral<br><input type='radio' name='q2' value=3> Disagree</form>"
        document.getElementById("q2").innerHTML = q;
    });

    d3.select("#q2").on("change", function () {
        a2 = d3.select('input[name="q2"]:checked').property("value");
        an.push(+a2);
        var q = "<p class='smalltext' style='color:#404040;'>"+q2[1]+"<br><br>"+a[a2]+"</p>"
        document.getElementById("q2").innerHTML = q;
        var q_2 = "<p class='smalltext' data-aos='fade-in'><b>"+q3[1]+"</b></p><form id='question"+q3[0]+"'data-aos='fade-in'><input type='radio' name='group-stack' value=0> Stronlgy Agree<br><input type='radio' name='group-stack' value=1> Slightly Agree<br><input type='radio' name='group-stack' value=2> Neutral<br><input type='radio' name='group-stack' value=3> Disagree</form>"
        document.getElementById("q3").innerHTML = q_2;
    });


    d3.select("#q3").on("change", function () {
        a3 = d3.select('input[name="group-stack"]:checked').node().value;
        an.push(+a3);
        var q = "<p class='smalltext' style='color:#404040;'>"+q3[1]+"<br><br>"+a[a3]+"</p>"
        document.getElementById("q3").innerHTML = q;
        var q_3 = "<p class='smalltext' data-aos='fade-in'><b>"+q4[1]+"</b></p><form id='question"+q4[0]+"'data-aos='fade-in'><input type='radio' name='group-stack' value=0> Strongly Agree<br><input type='radio' name='group-stack' value=1> Slightly Agree<br><input type='radio' name='group-stack' value=2> Neutral<br><input type='radio' name='group-stack' value=3> Disagree</form>"
        document.getElementById("q4").innerHTML = q_3;
    });


    d3.select("#q4").on("change", function () {
        a4 = d3.select('input[name="group-stack"]:checked').node().value;
        an.push(+a4);
        var q_4 = "<p class='smalltext' style='color:#404040;'>"+q4[1]+"<br><br>"+a[a4]+"</p>"
        document.getElementById("q4").innerHTML = q_4;
        
        const arrSum = arr => arr.reduce((a,b) => a + b, 0);
        console.log(arrSum(an));
        if((arrSum(an))>4){
            var answer = "<div data-aos='fade-in'> <h5 style='text-align: center'> Time moves towards You</h5> </div>";
            document.getElementById("questionaire").innerHTML = answer;
            var review = "";
            document.getElementById("questionreview").innerHTML = review;
        }else{
            var answer = "<div data-aos='fade-in'> <h5 style='text-align: center'> You move towards Time </h5> </div>";
            document.getElementById("questionaire").innerHTML = answer;
            var review = "";
            document.getElementById("questionreview").innerHTML = review;
        }

    });
}