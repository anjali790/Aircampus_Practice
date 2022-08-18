let grandParent=document.querySelector(".outerBox");
let parent=document.querySelector(".middleBox");
let child=document.querySelector(".innerBox");

//Bubbling:-
grandParent.addEventListener("click", ()=>{
    console.log('grandParent');
});

parent.addEventListener("click", ()=>{
    console.log('parent');
});

child.addEventListener("click", ()=>{
    console.log('child');
});