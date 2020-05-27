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
});