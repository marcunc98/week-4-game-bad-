// **VARIABLES**

var wins = 0;
var losses = 0;
var crystalTotals = 0;

// FUNCTIONS (not sure how to reset game/scores) EVERYTHING APPEARS TO GO INSIDE THE DOC.READY FUNCTION
$(document).ready(function() {
  var main = $("body");
  // This for loop will loop the command to create the div below four times and append it to our "parent-container".
  function reset() {
    $(".crystal-container").empty();

    for (var i = 0; i < 4; i++) {
      var crystalCollectors = $("<div>");

      crystalCollectors.attr("class", "crystalCollectors");

      $(".crystal-container").append(crystalCollectors);

      randomNumber = Math.floor(Math.random() * 12) + 1;
      //  console.log(randomNumber);

      crystalCollectors.addClass("crystal number");
      crystalCollectors.attr("data-number", randomNumber); //set value of each crystal
      crystalCollectors.text(randomNumber);
    }
  }
  reset();
  //***what happens when you click on the crystals - generates crystal totals ****//
  $(".crystal-container").on("click", ".crystalCollectors", function() {
    var rawNumber = parseInt($(this).attr("data-number")); //get value of each crystal

    crystalTotals += rawNumber;

    console.log(crystalTotals);

    //***If statement to capture what happens when score matches cpu guess and what happens when it does not ****//
    if (cpuRandom === crystalTotals) {
      wins++;
      crystalTotals = 0;
      reset();
      console.log("number of wins: " + wins);
      console.log("you win!");
    } else if (crystalTotals > cpuRandom) {
      losses++;
      crystalTotals = 0;
      reset();
      console.log("you lose");
      console.log("number of Losses: " + losses);
    }
  });
  //***generates random number from the computer (number between 19 -120) ****//


  function cpuGenNumber(max, min) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
    
  }
  var cpuRandom = cpuGenNumber(19, 120);

  $("#game-container").html(cpuRandom);
    // console.log(cpuRandom);
  
$("body").find("#gameScore-container").html("Wins: " + wins + "\n\nLosses: " + losses); // this is not working, wins and losses are not being tracked/incremented

var totalScore = $("<div>");
totalScore.attr("class", "totalScore");
$("#container").append(totalScore);
totalScore.addClass("Total Score");
totalScore.text(crystalTotals);

$(".score-div").html("<p>"+"Your total Score is:"+"</p>");
  
});
