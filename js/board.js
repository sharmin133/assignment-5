
let total=23;

let allTotal=6;

 let buttons=document.querySelectorAll('.btn-one');
 for(i=0; i<buttons.length; i++){
 buttons[i].addEventListener('click',updateBoard);
 }
    function updateBoard(event){
    alert('Board updated Successfully');

    if(allTotal===1){
        alert('congrates!!! You have completed all the current task');
    }

    total++;
    document.getElementById('total-increase').textContent= total;

    allTotal--;
    document.getElementById('total-decrease').textContent= allTotal;

    const taskContainer = event.target.parentElement.parentElement.parentElement;
    const taskTitle = taskContainer.querySelector('h1').textContent;
    const time = new Date().toLocaleTimeString();
    document.getElementById("activity-log").innerHTML += `<p> You have completed the task ${taskTitle} at ${time}</p>`;


    event.target.disabled=true;
   
}


function clearHistory(){
    document.getElementById('activity-log').innerText= '';
}

 




const colors=['red','green', 'blue', 'purple', 'yellow', 'black', 'pink','lime','orange','gray','lightblue'];
let currentIn=0;
function changeBackgroundColor(){
    document.body.style.backgroundColor=colors[currentIn];
    currentIn=(currentIn+1)%colors.length;
}




function updateDate(){
const now= new Date();
const formatWeekDay={weekday:'short'};
const formatMonth={month:'short'};
const formatDay={day: '2-digit'};
const formatYear={year: 'numeric'};

// const formatDate={weekday:'short', month: 'long', day: '2-digit',year:'numeric'};
let liveDateFormat1=now.toLocaleDateString('en-US',formatWeekDay);
let liveDateFormat2=now.toLocaleDateString('en-US',formatMonth);
let liveDateFormat3=now.toLocaleDateString('en-US',formatDay);
let liveDateFormat4=now.toLocaleDateString('en-US',formatYear);

// liveDateFormat=liveDateFormat.replace(',','').replace(' ',', ');
document.getElementById('weekday').innerText= liveDateFormat1;
document.getElementById('month').innerText= liveDateFormat2;
document.getElementById('day').innerText= liveDateFormat3;
document.getElementById('year').innerText= liveDateFormat4;

}

window.onload= updateDate;