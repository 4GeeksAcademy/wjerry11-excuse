/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// create the part of the excuse generator
var who = [
  "My dog",
  "My brother",
  "Darth Vader",
  "Voldemort",
  "a crocodile",
  "a snake"
];
var how = ["ate", "destroyed", "kidnapped"];
var what = ["my homework", "my project", "my computer", "my keys", "my car"];
var when = ["yesterday", "this morning", "two days ago", "a day ago"];
//  var where = []

// excuse function
function generateExcuse() {
  let randomWho = Math.floor(Math.random() * who.length);
  let randomHow = Math.floor(Math.random() * how.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  return (
    who[randomWho] +
    " " +
    how[randomHow] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen] +
    ","
  );
}
document.getElementById("excuse").innerHTML = generateExcuse();
window.onload = function() {
  console.log(generateExcuse());
};
