table.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink';
};
  
  table.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
};

let ne=document.querySelector('.NE');
ne.addEventListener('mouseover',()=>{
    console.log('northEast');
});
let e=document.querySelector('.E');
e.addEventListener('mouseover',()=>{
    console.log('east');
});
let sw=document.querySelector('.SW');
sw.addEventListener('mouseover',()=>{
    console.log('southWest');
});
let s=document.querySelector('.S');
s.addEventListener('mouseover',()=>{
    console.log('south');
});
let se=document.querySelector('.SE');
se.addEventListener('mouseover',()=>{
    console.log('southEast');
});
let w=document.querySelector('.W');
w.addEventListener('mouseover',()=>{
    console.log('west');
});
let nw=document.querySelector('.NW');
nw.addEventListener('mouseover',()=>{
    console.log('northWest');
});
let n=document.querySelector('.N');
n.addEventListener('mouseover',()=>{
    console.log('north');
});
