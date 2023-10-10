'use strict';
// random color from fixed value


const colors = ['red','yellow','green','blue','orange'];

const backGround = document.body;
const button = document.querySelector('.btn');
const colorValue = document.querySelector('.color--value');


let colorrandom = Math.floor(Math.random() * colors.length);


button.addEventListener('click', function(){
    colorrandom = Math.floor(Math.random() * colors.length);
    backGround.style.backgroundColor = colors[colorrandom];
    colorValue.textContent = colors[colorrandom];
})

//completeltynf ds f random

const colorCode = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

let buttonoRandom = document.getElementById('btn--1');
let hex='#';

let colorRandom2 = Math.floor(Math.random()*colorCode.length);

buttonoRandom.addEventListener('click',function(){
    hex='#'
    for ( let i = 1 ; i <= 6 ; i++){
        colorRandom2 = Math.floor(Math.random()*colorCode.length);
    hex +=colorCode[colorRandom2]
    colorValue.textContent = hex;
    backGround.style.backgroundColor = hex;
}
})










