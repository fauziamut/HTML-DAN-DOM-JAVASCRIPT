const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2) ');
li2.style.backgroundColor= 'orange';

//const p = document.querySelector('p');
//p.innerHTML = 'ini dari javacript' ;
//codingan diatas itu yang berubah hanya paragraf 1

//cara agar semua berubah dengan cara :document.querySelectorAll() digunakan untuk mengubah semua paragraf
const p = document.querySelectorAll('p');
//cara mewarnai semua paragraf dibawah ini
for (let i = 0; i<p.length; i++ ) {
    p [i].style.backgroundColor = 'lightblue';
}

//contoh nodrut
//const p4 = document.querySelectorAll('p');
//p4[3].style.backgroundColor = 'lightblue';

//element yang hanya merubah satu kotak (nodrut)
//const sectionB = document.querySelector('section#b');
//const p4 = sectionB.getElementsByTagName('p')[0];
//p4.style.backgroundColor = 'orange';