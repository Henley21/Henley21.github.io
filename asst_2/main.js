const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
function myButton() {
    var click = document.createElement("onClick");
    click.innerHTML = "Darken";
    document.body.appendChild(click);
    //https://www.w3schools.com/jsref/met_document_createelement.asp source
}
