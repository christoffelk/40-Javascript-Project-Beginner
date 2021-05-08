const colors = [
    "red","green","blue","yellow","white"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function() 
{
    const randomnumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];
});

const getRandomNumber = () =>
{
    return Math.floor(Math.random() * colors.length);
}