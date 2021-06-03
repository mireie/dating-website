function userTotalValue(number1, number2, number3) {
  return number1 + number2 + number3
}



$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const name = $("#userName").val();
    const gender = $("input:radio[name=gender]:checked").val();
    const number1 = parseInt($("#band").val());
    const number2 = parseInt($("#tvshow").val());
    const number3 = parseInt($("#rap").val());
    const totalValue = userTotalValue(number1, number2, number3);
    console.log("Total Value: "+totalValue);
    $("#inputName").text(name);

    if ((gender === "g-male") || (gender === "g-all" && totalValue % 2 === 0)) {
      if (totalValue < 15) {
        $("#celebrityName").text("Tom Cruise");
        $("#celebImg").attr("src","img/TomCruise.jpeg");
        $("#hidden").fadeIn(2000);
        //Tom Cruise
      } else if (totalValue >=15 && totalValue < 30 ) {
        $("#celebrityName").text("Tom Hanks");
        $("#celebImg").attr("src","img/TomHanks.jpeg");
        $("#hidden").fadeIn(2000);
        //Tom Hanks
      } else if (totalValue >=30 && totalValue < 45 ) {
        $("#celebrityName").text("Will Smith");
        $("#celebImg").attr("src","img/WillSmith.jpeg");
        $("#hidden").fadeIn(2000);
        //Will Smith
      } else if (totalValue >=45 && totalValue < 60 ) {
        $("#celebrityName").text("Ricky Martin");
        $("#celebImg").attr("src","img/RickyMartin.jpeg");
        $("#hidden").fadeIn(2000);
        //Ricky Martin
      } else {
        $("#celebrityName").text("Michael Jordan");
        $("#celebImg").attr("src","img/MichaelJordan.jpeg");
        $("#hidden").fadeIn(2000);
        //Michael Jordan
      }

    }
        
    if ((gender === "g-female") || (gender === "g-all" && totalValue % 2 != 0)) {
      if (totalValue < 15) {
        $("#celebrityName").text("Julia Roberts");
        $("#celebImg").attr("src","img/JuliaRoberts.jpeg");
        $("#hidden").fadeIn(2000);
        //Julia Roberts
      } else if (totalValue >=15 && totalValue < 30 ) {
        $("#celebrityName").text("Whitney Houston");
        $("#celebImg").attr("src","img/WhitneyHouston.jpeg");
        $("#hidden").fadeIn(2000);
        //Whitney Houston
      } else if (totalValue >=30 && totalValue < 45 ) {
        $("#celebrityName").text("Sandra Bullock");
        $("#celebImg").attr("src","img/SandraBullock.jpeg");
        $("#hidden").fadeIn(2000);
        //Sandra Bullock
      } else if (totalValue >=45 && totalValue < 60 ) {
        $("#celebrityName").text("Oprah");
        $("#celebImg").attr("src","img/Oprah.jpeg");
        $("#hidden").fadeIn(2000);
        //Opran
      } else {
        $("#celebrityName").text("Julia Louis-Dreyfus");
        $("#celebImg").attr("src","img/JuliaLouis.jpeg");
        $("#hidden").fadeIn(2000);
        //Julia Louis-Dreyfuss
      }
    }
    
    

  
  });
});


//  Notes
//
//  Minimum Score = 0
//  Maximum Score = 75
//
//  List of Celebs
//  0-14
//    Tom Cruise
//    Julia Roberts
//  15-29
//    Tom Hanks
//    Whitney Houston
//  30-44
//    Will Smith
//    Sandra Bullock
//  45-59
//    Ricky Martin
//    Oprah
//  60+
//    Michael Jordan
//    Julia Louis Dreyfuss

// All Home Skillets if total is even, male, if odd, female