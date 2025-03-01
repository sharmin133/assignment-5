
let total=23;

let allTotal=6;

 let buttons=document.querySelectorAll('.btn-one');
 for(i=0; i<buttons.length; i++){
 buttons[i].addEventListener('click',updateBoard);
 }
    function updateBoard(){
    alert('Board updated Successfully');

    if(allTotal===1){
        alert('congrates!!! You have completed all the current task');
    }

    total++;
    document.getElementById('total-increase').textContent= total;

    allTotal--;
    document.getElementById('total-decrease').textContent= allTotal;
    document.getElementById('btn-one').disabled=true;
   
}
 




const colors=['red','green', 'blue', 'purple', 'yellow', 'black', 'pink','lime','orange','gray','lightblue'];
let currentIn=0;
function changeBackgroundColor(){
    document.body.style.backgroundColor=colors[currentIn];
    currentIn=(currentIn+1)%colors.length;
}


