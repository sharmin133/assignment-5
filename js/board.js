
let total=23;

let allTotal=6;

document.getElementById('btn-one').addEventListener('click',function(){
    alert('Board updated Successfully');
    total++;
    document.getElementById('total-increase').textContent= total;

    allTotal--;
    document.getElementById('total-decrease').textContent= allTotal;
    document.getElementById('btn-one').disabled=true;
   
})




const colors=['red','green', 'blue', 'purple', 'yellow', 'black', 'pink','lime','orange','gray','lightblue',];
let currentIn=0;
function changeBackgroundColor(){
    document.body.style.backgroundColor=colors[currentIn];
    currentIn=(currentIn+1)%colors.length;
}


