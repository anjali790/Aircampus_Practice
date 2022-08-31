const grandParent = document.querySelector('.grandParent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// console.log(grandParent);
// console.log(parent);
// console.log(child);

grandParent.addEventListener('click',(event)=>{
    console.log('grandParent',event.target.style.color="red");
    // alert('grandParent clicked');
},{once:true});

parent.addEventListener('click',(event)=>{
    console.log('parent');
    // alert('parent clicked');
});

child.addEventListener('click',(event)=>{
    console.log('child');
    // alert('child clicked');
});

document.querySelector('body').addEventListener('click',()=>{
    console.log('document');
})
