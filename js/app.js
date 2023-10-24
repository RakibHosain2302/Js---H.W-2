


// card-1 decrement

let decrementBtn = document. querySelector(".Btn-cnt .decrement");

let result = document. querySelector('.Btn-cnt .result')


function decrementing(){

    if(result.value > 1){
     result.value=(Number(result.value) - 1);
    }
}

decrementBtn.addEventListener("click", decrementing)


// card-1 increment

let incrementBtn = document. querySelector(".Btn-cnt .increment");



function incrementing(){

    result.value =(Number(result.value) + 1)
}

incrementBtn.addEventListener("click", incrementing)


// 
// 


// rangeslider

let rangeSlider = document.querySelector(".rangeSlider");

let output = document.querySelector('.slider .output')



rangeSlider.addEventListener("input", () => {

     output .innerHTML = rangeSlider.value
   
}
)


// magic 

let rndBtn = document .querySelector (".rndBtn");

let colorize = document .querySelector ('.colorize')

rndBtn.addEventListener('click',  ()=>{
    const pink = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const Gray = Math.round(Math.random() * 255);

    colorize.style.backgroundColor =`rgb(${pink},${green},${Gray})`
})

// pass

let passwordBtn = document.querySelector(".passwordBtn");
let userPassword = document.querySelector(".userPassword");

passwordBtn.addEventListener("click", () => {
  if (userPassword.type == "password") {
    userPassword.type = "text";
    passwordBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;

  } else {
    userPassword.type = "password";
    passwordBtn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';

  }
});