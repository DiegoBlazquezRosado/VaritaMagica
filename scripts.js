/*
1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

    2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

    2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

    2.3 Bloques de article o section: Cambia el color de fondo.

3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

    3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

    3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

    3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
*/

// let all = document.getElementsByTagName("*");
// for (let i=0; i<all.length; i++) {
//     let links = all[i].getAttribute('href');
//     if (links !== null) {
//         all[i].setAttribute('href', '0');
//         console.log("asd");
//     }
//     console.log(links);
// }

//Premium
const colors = ['red', 'blue', 'green'];

const getRandom = (array) => {
    let random = Math.floor(Math.random()*array.length);
    return random;
}
//console.log(getRandom(colors));

//1.
let all = document.getElementsByTagName("*");
for (let i=0; i<all.length; i++) {
    all[i].addEventListener('click', function(click) {
        click.preventDefault();
        //click.stopPropagation();
    });
}


//2.
const magicImgs = ["1", "2", "3", "4", "5", "6"];

let clickImg = document.getElementsByTagName('img');
for (let i=0; i<clickImg.length; i++) {
    clickImg[i].addEventListener('click', function() {
        clickImg[i].setAttribute('src', './assets/magic-'+(getRandom(magicImgs)+1)+'.gif');
    });
}


let clickP = document.getElementsByTagName('p');
for (let i=0; i<clickP.length; i++) {
    clickP[i].addEventListener('click', function() {
        clickP[i].style.backgroundColor="black";
        clickP[i].style.color="white";
    });
}


let clickArticle = document.getElementsByTagName('article');
let clickSection = document.getElementsByTagName('section');
for (let i=0; i<clickArticle.length; i++) {
    clickArticle[i].addEventListener('click', function() {
        clickArticle[i].style.backgroundColor="lightgreen";
    });
}
for (let i=0; i<clickSection.length; i++) {
    clickSection[i].addEventListener('click', function() {
        clickSection[i].style.backgroundColor="lightgreen";
    });
}


//3.
// let hoverImg = document.getElementsByTagName('img');
// for (let i=0; i<hoverImg.length; i++) {
//     let originalSrc = hoverImg[i].getAttribute('src');
//     hoverImg[i].addEventListener('mouseenter', function(hover) {
//         hoverImg[i].setAttribute('src', './assets/abracadabra.gif');
//     });
//     hoverImg[i].addEventListener('mouseleave', function(hover) {
//         hoverImg[i].setAttribute('src', originalSrc);
//     });
// }


// let hoverP = document.getElementsByTagName('p');
// for (let i=0; i<hoverP.length; i++) {
//     let originalStyleBC = hoverP[i].style.backgroundColor;
//     let originalStyleC = hoverP[i].style.color;
//     hoverP[i].addEventListener('mouseenter', function(hover) {
//         hoverP[i].style.backgroundColor="black";
//         hoverP[i].style.color="white";
//     });
//     hoverP[i].addEventListener('mouseleave', function(hover) {
//         hoverP[i].style.backgroundColor=originalStyleBC;
//         hoverP[i].style.color=originalStyleC;
//     });
// }


// let hoverA = document.getElementsByTagName('article');
// for (let i=0; i<hoverA.length; i++) {
//     let originalStyleBC = hoverA[i].style.backgroundColor;
//     hoverA[i].addEventListener('mouseenter', function(hover) {
//         hoverA[i].style.backgroundColor="lightgreen";
//     });
//     hoverA[i].addEventListener('mouseleave', function(hover) {
//         hoverA[i].style.backgroundColor=originalStyleBC;
//     });
// }


// let hoverS = document.getElementsByTagName('section');
// for (let i=0; i<hoverS.length; i++) {
//     let originalStyleBC = hoverS[i].style.backgroundColor;
//     hoverS[i].addEventListener('mouseenter', function(hover) {
//         hoverS[i].style.backgroundColor="lightgreen";
//     });
//     hoverS[i].addEventListener('mouseleave', function(hover) {
//         hoverS[i].style.backgroundColor=originalStyleBC;
//     });
// }