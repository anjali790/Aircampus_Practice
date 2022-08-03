let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName("btn"));
// console.log(buttons, typeof buttons);

buttons.map((btn)=>{
    
    btn.addEventListener('click',e=>{
        let key=(e.target.innerText);
        if(key=='A/c'){
            display.innerText='';
        }else if(key=='C'){
            display.innerText=display.innerText.slice(0,-1);
        }else if(key=='='){
            display.innerText=eval(display.innerText);
        }else{
            display.innerText+=key;
        }
    })
});



// function sin(){
//     display.innerText=Math.sin(display.innerText)
// }




//else if(display.innerText== 'Infinity'){
    //display.innerText='';





