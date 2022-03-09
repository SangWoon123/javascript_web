
const dates=document.querySelector("h2#date");


function todayDate(){
    const today=new Date();
    const year=String(today.getFullYear()).padStart(2,"0");
    const month=String(today.getMonth()+1).padStart(2,"0");
    const day=String(today.getDate()).padStart(2,"0");
    dates.innerText=`${year}-${month}-${day}`;
}

todayDate();



