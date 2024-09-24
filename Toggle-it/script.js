let btn=document.querySelector(".button");
let state=true;

let firstdiv=document.querySelector(".main");
let seconddiv=document.querySelector(".container");
let img=document.querySelector(".img");
btn.addEventListener("mouseover",()=>{
    if(state===true){
    btn.style.color="#FFDE59";
    btn.style.backgroundColor="#AC8EF2";
    }
    else{
        btn.style.backgroundColor="#FE9900";
        btn.style.color="#EFC3CA";
    }
})
btn.addEventListener("mouseout",()=>{
    if(state===true){
        btn.style.color="white";
        btn.style.backgroundColor="black";
    }
    else{
        btn.style.color="black";
        btn.style.backgroundColor="white";
    }
})

btn.addEventListener("click",()=>{
    //i was doing wrong things in the arrow function part i was sending the variable state in arrow function
    //there is no problem in the boolean part we can also use the bool value of true of we can use the string value as well "true"
    if(state===true){
        btn.style.color="black";
        btn.style.backgroundColor="white";
        firstdiv.style.backgroundColor="white";
        seconddiv.style.backgroundColor="black";
        img.setAttribute("src","OIP (1).jpeg");
        img.setAttribute("alt","littlekrishna");
        state=false; 
    }
    else{ 
        btn.style.color="white";
        btn.style.backgroundColor="black";
        firstdiv.style.backgroundColor="black";
        seconddiv.style.backgroundColor="white";
        img.setAttribute("src","OIP.jpeg");
        state=true;
    }
})