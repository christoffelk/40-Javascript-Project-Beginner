let number = document.getElementById("number");
let buttonmin = document.getElementById("minus");
let buttonreset = document.getElementById("reset");
let buttonplus = document.getElementById("plus");


let count = 0;
const plus = () =>
{
    count+=1;
    number.innerHTML = count;
}
const minus = () =>
{
    count-=1;
    number.innerHTML = count;
}
const reset = () =>
{
    count = 0;
    number.innerHTML = count;
}
buttonplus.addEventListener("click",plus);
buttonmin.addEventListener("click",minus);
buttonreset.addEventListener("click",reset);