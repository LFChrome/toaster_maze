$('document').ready(function() {
  // JS Starts 
  // Variables  ------------------------------------------------------------------------------------------
  var toasts = 5;
  var roomsVisited = 0;
  var currentRoom;
  // Your inventory
  var inventory = [];
  
  var rooms = [room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14];

  var loot = {
    1: "Super Toast",
    3: "ScriptED swag",
    7: "Orange Juice",
    11: "Cinnamon Butter",
    14: "Mystic Pan"
  }
  // Functions being defined -----------------------------------------------------------------------------
  function goToRandomRoom() {
    var randomNumber = Math.floor(Math.random() * rooms.length);
    rooms[randomNumber]();
    $('#toastCounter').html(toasts);
    if (toasts === 0) {
      endGame();
    }
  }
  function beginGame() {
    $('.container').empty();
    $('.container').append("<p>Your journey in The Maze begins ...</p>");
    room5();
    $('#option').show();
  }
  
  function endGame() {
    $('#option').hide();
    if (toasts === 0) {
      $('.container').html("<h1>You have lost all your toasts. I guess the Toaster Maze was too much for you.<h1>");
    } else if (toasts >= 1 && toasts <= 4) {
      $('.container').html("<h1>You have completed the maze with " + toasts + " toasts. <br> You lost some toasts through the journey but you lived to tell the tale.<h1>");
    } else if (toasts > 4) {
      $('.container').html("<h1>You have completed the maze with " + toasts + " toasts. <br> Having about the same toasts, you became a legend in Toast-O-Ville.<h1>");
    }
    $('.container').append("<p> Cool Stuff I found: </p>");
    for(var i = 0; i < inventory.length; i++) {
      $('.container').append("<p>" + inventory[i] + "</p>");
    }
    
  }
  
  function lootRoom() {
    if (loot[currentRoom] === undefined) {
      alert("There isn't anything to loot");
    } else if (inventory.indexOf(loot[currentRoom]) === -1) {
      $(".container").append("<p>You loot " + loot[currentRoom] + ".</p>");
      inventory.push(loot[currentRoom]);
    } else {
      alert("This place has been looted already!");
    }
  }
      
  function room1() {
    // TODO: make left button, add description of the room, background color, images
    currentRoom = 1;
    $(".container").append("<p> Looks like a modern house bedroom with a chest </p>");
    $(".container").css("background-color", "#D2B48C");
    $(".container").append('<img class="img-thumbnail" src="http://www.yustusa.com/9/2015/06/modern-warm-nuance-of-the-color-house-wall-can-be-decor-with-wooden-floor-can-add-the-beauty-inside-with-warm-lighting-make-it-seems-nice.jpg">');
    
  } // Completed
  
  function room2() {
    currentRoom = 2;
    $(".container").append("<p> Looks lika swamp and has live larva crawling in the floor </p>");
    $(".container").append('<img class="img-thumbnail" src="https://s-i.huffpost.com/gen/4502814/images/n-SWAMP-628x314.jpg">');
    $(".container").css("background-color", "#9ACD32");
    var chance = Math.random();
    if (chance > 0.5) {
      $(".container").append("<p> Disgusting! A toast has rotted away! </p>");
      toasts -= 1;
    } else {
      $(".container").append("<p> Being aware, you manage to keep your toasts safe. </p>");
    }
  } // Completed
  
  function room3() {
    currentRoom = 3;
    $(".container").append("<p> Smells like poop but like the room is very dark and you can't see anything (you didn't bring a flashlight) </p>");
    $(".container").css("background-color", "#90EE90");
    $(".container").append('<img class="img-thumbnail" src="http://www.expressionschallenge.com/wp-content/uploads/2014/12/Dark_Room_by_ikiz.jpg">');
    var chance = Math.random();
    if (chance > 0.66) {
      $(".container").append("<p> You have fallen to the ground and you droped some toasts</p>");
      toasts -= 2;
    }
  } // Completed
  
  function room4() {
    currentRoom = 4;
    $(".container").append("<p> Looks bright and you see something that looks lika rock with face and blink red eye but open mouth with shape of toast maybe it hungury </p>");
    $(".container").css("background-color", "#778899");
    $(".container").append('<img class="img-thumbnail" src="https://c1.staticflickr.com/3/2907/14516881323_03761c6304_b.jpg">');
  }
  function room5() {
    currentRoom = 5;
    $(".container").append("<p> You see a moving rock that looks human; he's holding toasts and when he sees you he asks you if you want to gamble a toast in a game of rock paper scissors </p>");
    //EVENT HAPPENS IF CHOOSE TO GAMBLE
    //MOVING ROCK DAT LOOKS HUMAN CHOICE
    $(".container").css("background-color", "#FFE4C4");
    $(".container").append(`
      <div class="gambleGame">
        <img class="img-thumbnail" src="https://i.pinimg.com/originals/86/38/46/86384638d6988eed88184315072ed668.jpg">
        <input class="yourChoice">
        <button class="shoot">
          SHOOT!
        </button>
      </div>
      <div class="whoWon">
        
      </div>`);
    
    var allChoices = [
        "rock",
        "paper",
        "scissors"
        ];
    $(".shoot").click(function() {
      $("img").hide();
      $(".shoot").hide();
      $(".yourChoice").hide();
      var yourChoice = $(".yourChoice").val();
      var choiceRoll = Math.floor(Math.random()*3);
      var rockChoice = allChoices[choiceRoll];
      $(".container").append("The rock chose " + rockChoice);
      //CONDITIONAL TIES
        if(yourChoice === "rock" && rockChoice === "rock") {
          $(".whoWon").append("Nobody Again!");
        } else if (yourChoice === "paper" && rockChoice === "paper") { 
          $(".whoWon").text("Nobody Again!");
        } else if (yourChoice === "scissors" && rockChoice === "scissors") {
          $(".whoWon").text("Nobody Again!");
      //CONDITIONAL WINS (YOURS)
        } else if (yourChoice === "rock" && rockChoice === "scissors") {
          $(".whoWon").text("YOU WIN TAKE YOUR TOAST!");
          toasts += 1;
        } else if (yourChoice === "paper" && rockChoice === "rock") {
          $(".whoWon").text("YOU WIN TAKE YOUR TOAST!");
          toasts += 1;
        } else if (yourChoice === "scissors" && rockChoice === "paper") {
          $(".whoWon").text("YOU WIN TAKE YOUR TOAST!");
          toasts += 1;
      //CONDITIONAL ROCK WINS
        } else if (yourChoice === "rock" && rockChoice === "paper") {
          $(".whoWon").text("You Lost Give The Rock Toast!");
          toasts -= 1;
        } else if (yourChoice === "paper" && rockChoice === "scissors") {
          $(".whoWon").text("You lost, give The Rock Toast!");
          toasts -= 1;
        } else if (yourChoice === "scissors" && rockChoice === "rock") {
          $(".whoWon").text("You lost, give The Rock Toast!");
          toasts -= 1;
        } else {
          $(".whoWon").text("You didn't play");
        }
        $('#toastCounter').html(toasts);
    });
  } // Completed   
  // WEI
  // Skeleton !
  function room6() {
    currentRoom = 6;
    $(".container").append("<p>As you enter to the room, you feel a creepy prescence. A skeleton appears!</p>");
    $(".container").css("background-color", "#A9A9A9");
    $(".container").append('<img class="img-thumbnail" src="https://goo.gl/fVNWA4">');
  }
  // Nothing (?)
  function room7() {
    currentRoom = 7;
    $(".container").append("<p>You enter an empty room. There is a message written in the wall:</p>");
    $(".container").append('<p><i>"Have you tried a toast without bread?"</i></p>');
    $(".container").css("background-color", "#F4A460");
    $(".container").append('<img class="img-thumbnail" src="https://thumbs.dreamstime.com/t/empty-room-closed-door-dark-floor-9009049.jpg">');
  }
  // Questioning your sanity
  function room8() {
    currentRoom = 8;
    $(".container").append("<p>You feel that you have been trapped for hours inside the maze.</p>");
    $(".container").append("<p>You have been getting inside rooms, or maybe the rooms are getting inside you?</p>");
    $(".container").css("background-color", "#A0522D");
    $(".container").append('<img class="img-thumbnail" src="https://img.thedailybeast.com/image/upload/v1492189268/articles/2014/01/10/are-you-smarter-than-a-mouse-excerpt-from-smarter-the-new-science-of-building-brain-power/140109-hurley-smart_tntlva.jpg">');
  }
  // Hints
  function room9() {
    currentRoom = 9;
    $(".container").append("<p> The room doesn't have any features but you hear a voice from far away? </p>");
    $(".container").append('<p><i>"Toasts have a magical power, they resonate with the rooms to unlock passages!"</i></p>');
    $(".container").css("background-color", "#90EE90");
    $(".container").append('<img class="img-thumbnail" src="">');
  }
  // Deadly trap
  function room10() {
    currentRoom = 10;
    $(".container").append("<p>As soon as you get inside there are two signs</p>");
    $(".container").append('<p><i>"Do not toast!"</i></p>');
    $(".container").append('<p><i>"Toast for life!"</i></p>');
    $(".container").css("background-color", "#BC8F8F");
    $(".container").append('<img class="img-thumbnail" src="https://goo.gl/7xiUaG">');
  }
                    
//Alizah
  //have springs, as in water.
  function room11() {
    currentRoom = 11;
    $(".container").append("<p> Now this room has a waterfall to gaze at</p>");
    $(".container").css("background-color", "#00CED1");
    $(".container").append('<img class="img-thumbnail" src="https://goo.gl/njVrLL">');
    
  }
  //balloon, pop it and have powerup?
  function room12() {
    currentRoom = 12;
    $(".container").append("<p> There is a balloon </p>");
    $(".container").css("background-color", "#FF6347");
    $(".container").append("<img class='img-thumbnail' src=http://www.guinnessworldrecords.com/Images/Fastest-time-to-pop-100-balloons-by-a-dog-previous-record-holder_tcm25-433704.jpg>");
    
  }
  //toast a one of the breads w/ sun??
  function room13() {
    currentRoom = 13;
    $(".container").append("<p> Look at the sun, toast up! </p>");
    $(".container").css("background-color", "#FF6347");
    $(".container").append('<img class="img-thumbnail" src="https://c1.staticflickr.com/7/6221/6331554008_6f7db35ecf_b.jpg">');

  }
  //choose between pan or something
  function room14() {
    currentRoom = 14;
    $(".container").append("<p> There is a Pan </p>");
    $(".container").css("background-color", "#9ACD32");
    

  } //Completed
                  
  //Function being called 
    
  $("#option").hide();
    
  $("#play").click(function() {
    beginGame();
  });
  
  $("#loot").click(function() {
    lootRoom(currentRoom);                          
  }); 
  
  $(".move").click(function() {
    goToRandomRoom();
    roomsVisited += 1;
    if (roomsVisited === 8) {
      endGame();
    }
  });
  
  $("#toast").click(function() {
      $(".container").append("<p> You wasted a toast cuz. </p>");
      toasts -= 1;
      $('#toastCounter').html(toasts);
      if (toasts === 0) {
        endGame();
      }
  });
});
