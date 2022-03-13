const images=["1.png"];

const Image=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.classList.add("main-image");

bgImage.src=`img/${Image}`;

document.body.appendChild(bgImage);