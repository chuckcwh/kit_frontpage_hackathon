$(document).ready(function(){

    $( ".show" ).hover(function() {
        $( this ).fadeTo("slow", 0.2);
        }, function() {
        $( this ).fadeTo( "slow" , 0.8);
        }
    );

    $( "#circle_top_left").hover(function() {
        $('#top_left').fadeTo("slow", 1);
        }, function () {
        $('#top_left').fadeTo("slow", 0.2);
    });

    $( "#circle_top_right").hover(function() {
        $('#top_right').fadeTo("slow", 1);
        }, function () {
        $('#top_right').fadeTo("slow", 0.2);
    });

    $( "#circle_down_left").hover(function() {
        $('#down_left').fadeTo("slow", 1);
        }, function () {
        $('#down_left').fadeTo("slow", 0.2);
    });

    $( "#circle_down_right").hover(function() {
        $('#down_right').fadeTo("slow", 1);
        }, function () {
        $('#down_right').fadeTo("slow", 0.2);
    });

});