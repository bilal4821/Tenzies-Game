$(document).ready(function () {
  $(".num1").text(Math.floor(Math.random() * 10))
  $(".num2").text(Math.floor(Math.random() * 10))
  $(".num3").text(Math.floor(Math.random() * 10))
  $(".num4").text(Math.floor(Math.random() * 10))
  $(".num5").text(Math.floor(Math.random() * 10))
  $(".num6").text(Math.floor(Math.random() * 10))
  $(".num7").text(Math.floor(Math.random() * 10))
  $(".num8").text(Math.floor(Math.random() * 10))
  $(".num9").text(Math.floor(Math.random() * 10))
  $(".num10").text(Math.floor(Math.random() * 10))
  let button_status = {
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
    btn6: false,
    btn7: false,
    btn8: false,
    btn9: false,
    btn10: false,
  };

  var start = new Date;

   const myinterval = setInterval(function() {
    $('.timer').text(Math.round((new Date - start) / 1000, 0) + " Seconds");
  }, 1000);

  function myStop() {
    clearInterval(myinterval);
  }

  function check_Game_Finished() {
    if (
      button_status["btn1"] &&
      button_status["btn2"] &&
      button_status["btn3"] &&
      button_status["btn4"] &&
      button_status["btn5"] &&
      button_status["btn6"] &&
      button_status["btn7"] &&
      button_status["btn8"] &&
      button_status["btn9"] &&
      button_status["btn10"] == true
    ) {
      console.log("helo billa");
      $(".button").html("<h3> Reset Game <h3>");
      // document.getElementById("Message").style.display = "block";
      myStop();
      // $(".total-dies").html("You Won");
      // $(".total-dies").css("text-align" , "center");
      // $(".total-dies").html("<h1 style=\"text-align: center; color: whitesmoke; display: none\">YOU <img height=\"63px\" width=\"63px\" src=\"trophy.png\" alt=\"pic\" /> WON</h1>");

      $(".total-dies").html('<img style="height:53px" id="img" src="trophy.png"/>');
      
      $(".total-dies").css({
        "text-align":   "center",
        "margin-top":   "20px", 
        "margin-left":  "275px",
        "margin-right": "auto",
        "font-size":    "40px", 
        "font-weight":  "bold",
        "color": "#1f63d1", 
      });
      
      $(".button").click(function () {
        location.reload();
      });
    }
  }

  $(".die1").click(function () {
    button_status["btn1"] = !button_status["btn1"];
    console.log(button_status["btn1"]);
    if (button_status["btn1"] == true) {
      $(".die1").css("background-color", "red");
    } else {
      $(".die1").css("background-color", "");
    }
    check_Game_Finished();
  });

  $(".die2").click(function () {
    button_status["btn2"] = !button_status["btn2"];
    console.log(button_status["btn2"]);
    if (button_status["btn2"] == true) {
      $(".die2").css("background-color", "red");
    } else {
      $(".die2").css("background-color", "");
    }
    check_Game_Finished();
  });

  $(".die3").click(function () {
    button_status["btn3"] = !button_status["btn3"];
    console.log(button_status["btn3"]);
    if (button_status["btn3"] == true) {
      $(".die3").css("background-color", "red");
    } else {
      $(".die3").css("background-color", "");
    }
    check_Game_Finished();
  });

  $(".die4").click(function () {
    button_status["btn4"] = !button_status["btn4"];
    console.log(button_status["btn4"]);
    if (button_status["btn4"] == true) {
      $(".die4").css("background-color", "red");
    } else {
      $(".die4").css("background-color", "");
    }
    check_Game_Finished();
  });

  $(".die5").click(function () {
    button_status["btn5"] = !button_status["btn5"];
    console.log(button_status["btn5"]);
    if (button_status["btn5"] == true) {
      $(".die5").css("background-color", "red");
    } else {
      $(".die5").css("background-color", "");
    }
    check_Game_Finished();
  });

  $(".die6").click(function () {
    button_status["btn6"] = !button_status["btn6"];
    console.log(button_status["btn6"]);
    if (button_status["btn6"] == true) {
      $(".die6").css("background-color", "red");
    } else {
      $(".die6").css("background-color", "");
    }
    check_Game_Finished();
  });

  $(".die7").click(function () {
    button_status["btn7"] = !button_status["btn7"];
    console.log(button_status["btn7"]);
    if (button_status["btn7"] == true) {
      $(".die7").css("background-color", "red");
    } else {
      $(".die7").css("background-color", "");
    }
    check_Game_Finished();
  });

  $(".die8").click(function () {
    button_status["btn8"] = !button_status["btn8"];
    console.log(button_status["btn8"]);
    if (button_status["btn8"] == true) {
      $(".die8").css("background-color", "red");
    } else {
      $(".die8").css("background-color", "");
    }
    check_Game_Finished();
  });

  $(".die9").click(function () {
    button_status["btn9"] = !button_status["btn9"];
    console.log(button_status["btn9"]);
    if (button_status["btn9"] == true) {
      $(".die9").css("background-color", "red");
    } else {
      $(".die9").css("background-color", "");
    }
    check_Game_Finished();
  });

  $(".die10").click(function () {
    button_status["btn10"] = !button_status["btn10"];
    console.log(button_status["btn10"]);
    if (button_status["btn10"] == true) {
      $(".die10").css("background-color", "red");
    } else {
      $(".die10").css("background-color", "");
    }
    check_Game_Finished();
  });

  $(".button").click(function () {
    if (button_status["btn1"] == false) {
      $(".num1").text(Math.floor(Math.random() * 10));
    }

    if (button_status["btn2"] == false) {
      $(".num2").text(Math.floor(Math.random() * 10));
    }

    if (button_status["btn3"] == false) {
      $(".num3").text(Math.floor(Math.random() * 10));
    }

    if (button_status["btn4"] == false) {
      $(".num4").text(Math.floor(Math.random() * 10));
    }

    if (button_status["btn5"] == false) {
      $(".num5").text(Math.floor(Math.random() * 10));
    }

    if (button_status["btn6"] == false) {
      $(".num6").text(Math.floor(Math.random() * 10));
    }

    if (button_status["btn7"] == false) {
      $(".num7").text(Math.floor(Math.random() * 10));
    }

    if (button_status["btn8"] == false) {
      $(".num8").text(Math.floor(Math.random() * 10));
    }

    if (button_status["btn9"] == false) {
      $(".num9").text(Math.floor(Math.random() * 10));
    }

    if (button_status["btn10"] == false) {
      $(".num10").text(Math.floor(Math.random() * 10));
    }
  });
});

let value = 0;

$(".button").click(function () {
  value = value + 1;
  $(".cal").text(value);
  if (value == 5) {
    $(".cal").text(value * 0);
  }
});



















// var start = new Date();
// var intervalId = setInterval(function() {
//   var elapsedSeconds = Math.round((new Date() - start) / 1000, 0);
  
//   $('.timer').text(elapsedSeconds + " Seconds");

  
//   if (elapsedSeconds >= 10) {
//     clearInterval(intervalId); 
//     $('.timer').text("Timer Stopped at " + elapsedSeconds + " Seconds");
//   }
// }, 1000);
