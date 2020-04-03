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
//let but = document.getElementById('onClick');
//btn.getAttribute('onClick', xxx);
//btn.textContent = xxx;
//overlay.style.backgroundColor = xxx;
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery 
