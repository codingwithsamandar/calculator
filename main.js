let sonone = document.querySelector('.sonone');
let sontwo = document.querySelector('.sontwo');
let amall = document.querySelector('.amall');
let result = document.querySelector('.result');

let firstnumber = '';
let secondnumber = '';
let belgi = '';
let resetNext = false; 

function num(a) {
    result.textContent = ''; 
    if(resetNext && belgi === '') {
        firstnumber = '';
        sonone.textContent = '';
        resetNext = false;
    }

    if (belgi === '') {
        firstnumber += a;
        sonone.textContent = firstnumber;
    } else {
        secondnumber += a;
        sontwo.textContent = secondnumber;
    }
}

function amal(c) {
    if(firstnumber === '') return; 
    belgi = c;
    amall.textContent = belgi;
}

function del() {
    if (secondnumber !== '') {       
        secondnumber = secondnumber.slice(0, -1);
        sontwo.textContent = secondnumber;
    } else if (belgi !== '') {       
        belgi = '';
        amall.textContent = '';
    } else if (firstnumber !== '') { 
        firstnumber = firstnumber.slice(0, -1);
        sonone.textContent = firstnumber;
    }
}

function clearAll() {
    firstnumber = '';
    secondnumber = '';
    belgi = '';
    resetNext = false;
    sonone.textContent = '';
    sontwo.textContent = '';
    amall.textContent = '';
    result.textContent = '';
}

function calc() {
    if(firstnumber === '' || secondnumber === '' || belgi === '') return;t

    let natija;
    if (belgi === '+') natija = Number(firstnumber) + Number(secondnumber);
    else if (belgi === '-') natija = Number(firstnumber) - Number(secondnumber);
    else if (belgi === '×') natija = Number(firstnumber) * Number(secondnumber);
    else if (belgi === '÷') natija = Number(firstnumber) / Number(secondnumber);

    result.textContent ='=' + natija;
    resetNext = true;
    firstnumber = '';
    secondnumber = '';
    belgi = '';
    sonone.textContent = firstnumber;
    sontwo.textContent = '';
    amall.textContent = '';
}
