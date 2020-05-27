let upperKeys = ("#keyboard-upper-container");
let lowerKeys = ("#keyboard-lower-container");
let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate"
];
//hide lower container
$(document).ready(function() {
    $("#keyboard-upper-container").hide();
});

//Setup
$(function() {
    var $write = $('write'),
        shift = false,
        capslock = false;
});

//click handler

$('#row').click(function() {
    var $this = $(this),
        character = $this.html();
        
});

// Shift keys

if ($this.hasClass(''))