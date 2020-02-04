var questions = 3
var questionsLeft = ' [' + questions + ' questions left]';
var noun1 = prompt("What is the noun you'd like to use?" + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb1 = prompt("What is the verb you'd like to use?" + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective1 = prompt("What is the adjective you'd like to use?" + questionsLeft);
console.log(noun1);
console.log(verb1);
console.log(adjective1);
alert("Great work! You're done! Now let's see what your story holds!");
var story = "<p>Once upon a time a giant " + noun1;
    story +=" was walking down the street, when suddently it began to ";
    story += verb1 + ".</p>";
    story += "<p> The " + noun1 + " grew tired as it skidded into ";
    story += "a " + adjective1 + " turnip truck, knocking all of ";
    story += "the turnips out onto the street!"
document.write(story);
console.log(story);