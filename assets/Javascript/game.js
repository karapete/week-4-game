
var randomNumber;
$(document).ready(function(){
	var randomNumber = Math.floor((Math.random() * 120) +1)
	$("#randomNumber").text(randomNumber);
	console.log(randomNumber);


// set variables

var wins =0;
var losses =0;
var total =0;
var score =0;



var numOne= Math.floor(Math.random()*10+1);
var numTwo= Math.floor(Math.random()*10+1);
var numThree= Math.floor(Math.random()*10+1);




  $("wins").text(wins);
  $("losses").text(losses);





    //button gem clicks
   
    $('#aquaGem').on ('click', function(){
    total = total + numThree;
    console.log("New playerTotal= " + total);
    $("#score").text(total);
    console.log(total);

          if (total === randomNumber){
          winner();
        }
        else if (total > randomNumber){
          loser();
          reset();
        } 

    });


     $("#diamond").on ('click', function(){
    total = total + numTwo;
    console.log("New playerTotal= " + total);
    $("#score").text(total);

          if (total === randomNumber){
          winner();
        }
        else if ( total > randomNumber){
          loser();
          reset();
        } 

    });



     $('#goldGem').on ('click', function(){
    total = total + numOne;
    console.log("New playerTotal= " + total + ","+randomNumber);
    $("#score").text(total);

          if (total === randomNumber){
          winner();
        }
        else if ( total > randomNumber){
          loser();
          reset();
        } 

    });



       // win/lose functions
      function winner(){
      wins++;
      alert("You Win!");
      $("#wins").text(wins);
      reset();
    }

    function loser(){
    alert ("You lose!");
     losses++;
   $("#losses").text(losses);
   reset();
    
    }


   function reset(){
    randomNumber = Math.floor((Math.random() * 120) +1)
  $("#randomNumber").text(randomNumber);
    total =0; 
    $("#score").html(total);

   }
 



});