// DOM Selection
// document.getElementById()
const judul = document.getElementById(`judul`); 
judul.style.color = ` brown`;
judul.style.backgroundColor = `#ccc`;
judul.innerHTML = `unyahhh`;

// document.getElementsByTagName()
// -> HTMCollections
const p = document.getElementsByTagName(`p`);

for( let i = 0; i<p.length; i++) {
    p[2].style.backgroundColor = `light blue`;
}

const h1 = document.getElementsByTagName(`h1`)[0];
h1.style.fontSize = `50px`;

//document.getElementByClassname()
//-> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini di ubah jadi javascript';

