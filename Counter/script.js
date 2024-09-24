let firstinput=document.querySelector(".input");
let increase=document.querySelector("#increase");
let decrease=document.querySelector("#decrease");
let secondinput=document.querySelector(".input2");
let reset=document.querySelector(".reset");


//the only way to access the value which stored in input box is nodenameofinputbox.value 

//parseInt() function this function is used to convert the string's of number into actual number like "123" -> 123

increase.addEventListener("click",()=>{
    console.log(firstinput.value)
    console.log(typeof firstinput.value)
    let a=parseInt(firstinput.value)
    console.log(typeof a)
    console.log(secondinput.value)
    console.log(typeof secondinput.value)
    let b=parseInt(secondinput.value);
    console.log(typeof b);
    firstinput.value=a+b;
})
decrease.addEventListener("click",()=>{
    // firstinput.value-=secondinput.value
    console.log(firstinput.value)
    console.log(typeof firstinput.value)
    let a=parseInt(firstinput.value)
    console.log(typeof a)
    console.log(secondinput.value)
    console.log(typeof secondinput.value)
    let b=parseInt(secondinput.value);
    console.log(typeof b);
    firstinput.value=a-b;
})
reset.addEventListener("click",()=>{
    firstinput.value=null;
    secondinput.value=null;
})
