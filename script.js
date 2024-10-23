// generate a random color
const randomColor = function(){
    const hex= "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
         color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

console.log(randomColor());

// document.querySelector('#start').addEventListener('click', (startChangingColor)=>{
//     document.body.style.backgroundColor = randomColor()
// })
let interval;
const startChangingColor= function(){
        interval = setInterval(changeBgColor, 1000)
        function changeBgColor(){
            document.body.style.backgroundColor = randomColor()
        }
};


const stopChangingColor = function(){
    clearInterval(interval);
    interval = null; // es se values over write nhi hogi or memory free hogi
    console.log("STOPPED");
}


document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)

