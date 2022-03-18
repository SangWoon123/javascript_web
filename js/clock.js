const clock = document.querySelector("h2#clock");


function getClock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
}


getClock();
setInterval(getClock,1000);


/*<----------------------------------------------------------------------------------------------->*/ 


const color1=["#f3b6a8","#a982d7","#e73355","#fff7aa","#3b8db4","white","#4d4442"];

function handleClickColor(){
    const backColor3=color1[Math.floor(Math.random()*colors.length)];
    clock.style.color=backColor3;
}

clock.addEventListener("click",handleClickColor);