$(function() {

var compNum;
var val1;
var val2;
var val3;
var val4;
var score = 0;
var wins = 0;
var loss = 0;


function reset() {
    score = 0;
    $('#scorebox').html(`<h2>${score}</h2>`);
    compNum = getRandomInt(19, 120);
    $('#goalnum').html(`<h1>${compNum}</h1>`);

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }



compNum = getRandomInt(19, 120);
$('#goalnum').html(`<h1>${compNum}</h1>`);

val1 = getRandomInt(1, 12);
val2 = getRandomInt(1, 12);
val3 = getRandomInt(1, 12);
val4 = getRandomInt(1, 12);
console.log(val1, val2, val3, val4);

function crystalScore(event) {
    score = score + event.data.val;
    $('#scorebox').html(`<h2>${score}</h2>`);
    if (score == compNum) {
        alert("You win!");
        wins++;
        console.log(wins);
        $('#wins').text(wins);
        reset();
    }

    if (score > compNum) {
        alert("Sorry, try again.");
        loss++;
        console.log(loss);
        $('#loss').text(loss);
        reset();
    }
}

$('#crystal1').click({val: val1}, crystalScore);
$('#crystal2').click({val: val2}, crystalScore);
$('#crystal3').click({val: val3}, crystalScore);
$('#crystal4').click({val: val4}, crystalScore);



    

});
