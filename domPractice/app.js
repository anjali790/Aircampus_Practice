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

document.addEventListener("click", ()=>{
    console.log("document");
});

document.querySelector("html").addEventListener("click", ()=>{
    console.log("html");
});

document.querySelector("body").addEventListener("click", ()=>{
    console.log("body");
});
