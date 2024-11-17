let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
console.log(saveEl);
function increment(){
   count += 1;
   countEl.innerText = count
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
countEl.textcountent = 0;
    count = 0;

}

let age =21;
if( age => 21){
    console.log("you can't enter rhe club");
}
else{
    console.log("welcome!");
}