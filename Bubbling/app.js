let grandParent=document.querySelector(".grandParent");
let parent=document.querySelector(".parent");
let child=document.querySelector(".child");



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


//Capturing:-
// grandParent.addEventListener("click", ()=>{
//     console.log('grandParent');
// },{capture:true});

// parent.addEventListener("click", ()=>{
//     console.log('parent');
// },{capture:true});

// child.addEventListener("click", ()=>{
//     console.log('child');
// },{capture:true});