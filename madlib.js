var noun1 = prompt("What is the first noun you'd like to use?");
var verb1 = prompt("What is the first verb you'd like to use?");
var adjective1 = prompt("What is the first adjective you'd like to use?");
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