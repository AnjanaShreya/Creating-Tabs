let tab1 = document.getElementById('tab1')
let counters = document.getElementById('counters')

let tab2 = document.getElementById('tab2')
let prime = document.getElementById('prime')

let tab3 = document.getElementById('tab3')
let timer = document.getElementById('timer')

let tab4 = document.getElementById('tab4')
let modals1 = document.getElementById('modals')

tab1.addEventListener('click', function() {
    counters.style.display = 'block';
    tab1.style.backgroundColor = 'beige';
    prime.style.display = 'none';
    tab2.style.backgroundColor = 'lightgreen'
    timer.style.display = 'none'
    tab3.style.backgroundColor = 'lightgreen'
    modals1.style.display = 'none'
    tab4.style.backgroundColor = 'lightgreen'
})

tab2.addEventListener('click', function() {
    prime.style.display = 'block';
    tab2.style.backgroundColor = 'beige';
    counters.style.display = 'none';
    tab1.style.backgroundColor = 'lightgreen'
    timer.style.display = 'none'
    tab3.style.backgroundColor = 'lightgreen'
    modals1.style.display = 'none'
    tab4.style.backgroundColor = 'lightgreen'
})

tab3.addEventListener('click', function(){
    timer.style.display = 'block'
    tab3.style.backgroundColor = 'beige'
    counters.style.display = 'none';
    tab1.style.backgroundColor = 'lightgreen'
    prime.style.display = 'none';
    tab2.style.backgroundColor = 'lightgreen'
    modals1.style.display = 'none'
    tab4.style.backgroundColor = 'lightgreen'
})

tab4.addEventListener('click', function(){
    modals1.style.display = 'block'
    tab4.style.backgroundColor = 'beige'
    counters.style.display = 'none';
    tab1.style.backgroundColor = 'lightgreen'
    prime.style.display = 'none';
    tab2.style.backgroundColor = 'lightgreen'
    timer.style.display = 'none'
    tab3.style.backgroundColor = 'lightgreen'
})

// ----------------------COUNTER--------------------------//

let pcount = document.getElementById('count');
let text = document.getElementById('evenodd');
let number1 = 0;

function incr() {
    if (number1 < 10) {
        number1++;
        pcount.textContent = number1;

        if (number1 % 2 == 0 && number1 != 0) {
            text.textContent = 'Even';
        } else {
            text.textContent = 'Odd';
        }
    } else {
        alert('The number is more than 10!!');
        number1 = 0;
        pcount.textContent = number1;   
        text.textContent = '';
    }
}

function decr() {
    if (number1 > 0) {
        number1--;
        pcount.textContent = number1;

        if (number1 % 2 == 0 && number1 != 0) {
            text.textContent = 'Even';
        } else {
            text.textContent = 'Odd';
        }
    }
}

// ------------------------------Prime Number Finder----------------------------------------//

let resets = document.getElementById('reset')
let submits = document.getElementById('submit')
let inputField = document.getElementById('number') 
let results = document.getElementById('result')

resets.addEventListener('click', function(){
    inputField.value = "";
    results.innerHTML = "<h2>Result</h2>";
});

submits.addEventListener('click', function(){

    results.innerHTML = "<h2>Result</h2>";

    let pnum = parseInt(inputField.value);
    let isPrime = true;

    if (isNaN(pnum) || pnum < 2) {
        results.innerHTML += `<p>Please enter a valid number greater than 1.</p>`;
        return;
    }

    for(let i = 2; i < pnum; i++) {
        if(pnum % i === 0){
            isPrime = false;
            break;            
        }
    }    

    const para = document.createElement('p')
    if (isPrime === true) {
        para.textContent = pnum + ' is a prime number'
    } else {
        para.textContent = pnum + ' is not a prime number'
    }
    results.appendChild(para)
})

// --------------------------------------------Timer------------------------------------------//

let timers = document.getElementById('timer')
let c = 0
setInterval(function ()
{
    let dt = new Date()
    timers.textContent = dt.toLocaleTimeString()+ dt.toLocaleDateString();
}, 1000)

function x()
{
   return new Promise(function (resolve, reject)
{
    setTimeout(resolve("hello world"), 5000)
}); 
}
const y = x()
console.log(y)

// ---------------------------------------modal----------------------------------------------//

let button2 = document.getElementById('button2');
let modal = document.getElementById('modal')
let button1 = document.getElementById('button1')
let card = document.getElementById('card2')
let overlays = document.getElementById('overlay')
let overlaybtn = document.getElementById('overlay-button')
let button3 = document.getElementById('button3')

button2.addEventListener('click', function(){
    modal.style.display = 'block';
    card.style.display = 'none';
})

button1.addEventListener('click', function() {
    modal.style.display = 'none';
    card.style.display = 'block';
});

overlaybtn.addEventListener('click', function(){
    overlays.style.display = 'block'    
    overlays.style.animationName = 'stretch';
})

button3.addEventListener('click', function(){
    overlays.style.display = 'none'
})