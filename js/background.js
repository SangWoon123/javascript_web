const images=["1.jpg","3.jpg","2.jpg"];

const Image=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.classList.add("main-image");

bgImage.src=`img/${Image}`;

document.body.appendChild(bgImage);