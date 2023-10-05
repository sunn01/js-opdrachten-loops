//opdracht 1
let x = 0;
while (x <= 9) {
    console.log('cijfer is:' + x );
    x++;
}
if (x > 9) {
    console.log('Einde programma')
}

//opdracht 2
let y = 2;
while (y <= 20) {
    console.log('cijfer is:' + y);
    y++;  
}
if (y > 20) {
    console.log('Einde programma')
}

//opdracht 3
let z = 10; 
while (z >= 0) {
    console.log('cijfer is:' + z);
    z--;
}
if (z < 0) {
    console.log('Einde programma')
}

//opracht 4
let a = 40;
while (a >= 4) {
    console.log('cijfer is:' + a);
    a--;
}
if (a < 4) {
    console.log('Einde programma')
}

 //opdracht 5
let b = 0;
while (b <= 7) {
    console.log('Ik ben een student van ROCMondriaan');
    b++;
}
if (b > 7) {
    console.log('Einde programma');
}

//opracht 7
let c = 0;
while (true) {
    console.log('cijfer is:' + c);
    if (c >= 9) {
        break;
    }
    c++;
}
console.log('Einde programma')

//opdracht 8
let e = 0;
while (e < 20) {
    console.log('loop');
    e++;
    if (e > 9) {
        break;
    }
}
console.log('Einde programma');

//opdracht 9
let d = 0;
while (d < 20) {
    console.log('dit is zin 1');
    d++;
    if (d > 10) {
        continue; //plays the loop from the beginning again
    }
    console.log('dit is zin 2');
    
}

//opdracht 6
let f = 0
while (f <= 12) {
    console.log('Dit is loop:' + f);
    f++;
}
console.log('Einde programma');
