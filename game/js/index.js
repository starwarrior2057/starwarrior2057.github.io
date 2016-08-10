var story = document.getElementById("story");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var name;

function boring() {
  alert("go now if you dont want to play.troll");
  story.innerHTML = "play again?."
  opt1.innerHTML = "";
  opt2.innerHTML = "";
}

function play() {
  name = prompt("What is your name, lazy dude ?");
  story.innerHTML = "Welcome, " + name +". king troll has summoned you. What do you do?";
  opt1.innerHTML = "Go see the king";
  opt1.onclick = function() {king()};
  opt2.innerHTML = "Keep sleeping";
  opt2.onclick = function() {sleep()};
}

function troll() {
   story.innerHTML = "The troll tells you to go slay the dragon!";
  opt1.innerHTML = "Fight the dragon!";
  opt1.onclick = function() {fightDragon()};
  opt2.innerHTML = "fight the dragon";
  opt2.onclick = function() {train()};
}

function sleep() {
  alert("you got trolled so hard that you died.")
}