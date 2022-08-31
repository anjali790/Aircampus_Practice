const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


grandParent.addEventListener("click", ()=>{
    console.log("grandParent");
});

parent.addEventListener("click", ()=>{
    console.log("parent");
});

child.addEventListener("click", ()=>{
    console.log("child");
});


grandParent.addEventListener("click", ()=>{
    console.log("grandParent");
},{capture:true});

parent.addEventListener("click", ()=>{
    console.log("parent");
},{capture:true});

child.addEventListener("click", ()=>{
    console.log("child");
},{capture:true});













// document.addEventListener("click", ()=>{
//     console.log("document");
// });

// document.querySelector("html").addEventListener("click", ()=>{
//     console.log("html");
// });

// document.querySelector("body").addEventListener("click", ()=>{
//     console.log("body");
// });
