const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i < 6; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg')
    thumbBar.appendChild(newImage);
    
    newImage.onclick = function() {
        displayedImage.getAttribute('src')
        displayedImage.setAttribute('src', newImage.src)
    }   //https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
    

}

/* Wiring up the Darken/Lighten button */
/*function myButton() {
      var click = document.createElement("onClick");
    click.innerHTML = "Dark";
    document.body.appendChild(click);
    //https://www.w3schools.com/jsref/met_document_createelement.asp source */
    
    btn.onclick = function() {
        if (btn.getAttribute("class") === "dark") {
            btn.setAttribute("class", "light");
            btn.textContent = "lighten";
            overlay.setAttribute("style", "background-color: rgba(0,0,0,0.5)")
        } else {
            btn.setAttribute("class", "dark");
            btn.textContent = "darken";
            overlay.setAttribute("style", "background-color: rgba(0,0,0,0)")
        }   //https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style
}

