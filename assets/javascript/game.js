$(document).ready(function() {

//=============================================================================
//================================VARIABLES====================================

//variable of number for user to match
var magicNumber;

//variable of user win count
var wins = 0;

//variable of user loss count
var losses = 0;

//variable of crystal count total
var total;

//variables to attach js to id
var crystal1 = $("#crystal1");
var crystal2 = $("#crystal2");
var crystal3 = $("#crystal3");
var crystal4 = $("#crystal4");

//variable for attribute of crystal worth
var crystalWorth = [];

//=============================================================================
//================================FUNCTIONS====================================

//function to initialize the game, empty crystal value and total and append new values

function reset() {
    total = 0;
    $("#total").html(total);

    magicNumber = [Math.floor(Math.random() * (129 - 19 + 1) + 19)];
    $("#magicNumber").html(magicNumber);
    
    crystalWorth[0] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
    crystalWorth[1] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
    crystalWorth[2] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];
    crystalWorth[3] = [Math.floor(Math.random() * (12 - 1 + 1) + 1)];

    crystal1.attr("crystalworth", crystalWorth[0]);
    crystal2.attr("crystalworth", crystalWorth[1]);
    crystal3.attr("crystalworth", crystalWorth[2]);
    crystal4.attr("crystalworth", crystalWorth[3]);
    }

reset();

//=============================================================================
//================================MAIN GAME====================================

$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);

$(".crystal").on("click", function() {

    var crystalWorthRando = $(this).attr("crystalworth");

    crystalWorthRando = parseInt(crystalWorthRando);

    total = total += crystalWorthRando;

    $("#total").html(total);
    
    if (total == magicNumber) {
        wins++;
        $("#wins").html("Wins: " + wins);
        reset();

    }   else if (total > magicNumber) {
        losses++;
        $("#losses").html("Losses: " + losses);
        reset();
    }
    });
});

