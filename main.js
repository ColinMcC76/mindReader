const button1 = document.querySelector("#next");
const button2 = document.querySelector("#reset");
let para = document.getElementById("para")
let page = document.getElementById("header");
let state = 0;
button1.addEventListener("click", build);
button2.addEventListener("click", reset);
let random = "$%^#@!*!&"
let nine = 0;

function build() {
    state++
    console.log(state)
    assembly(state);
}
function reset() {
    state = 0
    console.log(state)
    assembly(state);
    
}
function randomize() {
    nine = random.charAt(Math.floor(Math.random() * random.length));
    console.log(nine);
    return nine
}
function numbers() {
    randomize();
    var x = [];
    let str = ""
    console.log(x)
    for (let i = 0; i < 100; i++) {
        if (i % 9 == 0) {
            x.push(nine); 
        }
        else x.push(random.charAt(Math.floor(Math.random() * random.length)));
        x[i] = i+": "+x[i];
    str += x[i]+ " <br>";
    }

    return str;
}
function assembly(state) {
    console.log("assembly")
    switch (state) {
        case 0:
            page.innerText = "I can read your mind.";
            para.innerText = ""
            document.getElementById("next").className = "order-2"
            button1.innerText = "next"

            break;
        case 1:
            page.innerText = "Pick a number 01-99";
            para.innerText = "Click next when ready."
            button1.innerText = "next"

            break;
        case 2:
            page.innerText = "Add both digits together";
            para.innerText = "Ex. 14 = 1 + 4 = 5"
            button1.innerText = "next"

            break;
        case 3:
            page.innerText = "Subtract old number from new number";
            para.innerText = "Ex. 14 - 5 = 9"
            button1.innerText = "next"

            break;
        case 4:
            page.innerHTML = numbers();
            para.innerText = "Scroll to find the number, and note the symbol beside it."
            button1.innerText = "reveal"
            break;
        case 5:
            page.innerText = nine;
            para.innerText = "Your symbol was "+ nine+" ."
            document.getElementById("next").className = "btn disabled"
            button1.innerText = " "

            break;
        case 6:
            reset();
            para.innerText = ""
    }

}
