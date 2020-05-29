let upperKeys = ("#keyboard-upper-container");
let lowerKeys = ("#keyboard-lower-container");
let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate"
];
//hide upper container
$(document).ready(function() {
    $("#keyboard-upper-container").hide();
});

//when key is pressed
$(document).keydown(function(e) {
    //shift pressed
    if (e.which === 16) {
        $(upperKeys).show();
        $(lowerKeys).hide();
}
});

//shift released
$(document).keyup(function(e) {
    if (e.which === 16) {
        $(lowerKeys).show();
        $(upperKeys).hide();
    }
});

//highlight key
$(document).keypress(function(e) {
    let key = $("#" + e.which);
    $(key).css("background-color", "yellow");
    $(document).keyup(function(e) {
        $(key).css("background-color","");
    });
});

//Sentences

let array = 0;
let writing = sentences[array];
let currentKey = 0;
let letter = writing.substring(currentKey, currentKey+1)
$("#sentence").text(writing);
$("#target-letter").text(letter);
let timerOn = false;
let startTime;
let errors = 0;

$(document).keypress(function(e) {
    if (timerOn === false) {
      startDate = new Date();
      startTime = startDate.getTime();
      timerOn = true;
    }

    if (e.which == sentences[array].charCodeAt(currentKey)) {
        let correct = $('<span class="green">✓</span>');
        $(correct).appendTo("#feedback");
        
        $("#yellow-block").css("left", "+=17.3px");
        
        currentKey++;
        letter = writing.substring(currentKey,currentKey + 1);
        $("#target-letter").text(letter);
       
        if (currentKey === writing.length) {
          array++; 
          //if sentences are complete
          if (array === sentences.length) {
            let endDate = new Date();
            let endTime = endDate.getTime();
            let minutes = (endTime - startTime) / 60000;
            wpm = Math.round(54 / minutes - 2 * errors);
            var confirmBox = confirm(
              `You typed ${wpm} words per minute! Would you like to try again?`
            );
            if (confirmBox == true) {
              location.reload();
            }
          } else {
           
            writing = sentences[array];
            $("#sentence").text(writing);
            currentKey = 0;
            letter = writing.substring(currentKey, currentKey + 1);
            $("#target-letter").text(letter);
            $("#yellow-block").css("left", "15px");
            $("#feedback").text("");
          }
        }
      } else {
        let wrong = $('<span class="red">x</span>');
        $(wrong).appendTo("#feedback");
        errors++;
      }
    });