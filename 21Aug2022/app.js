const mainDiv = document.querySelector('#container');
const data = [];

function addData(e){
    e.preventDefault();
    // console.log('anjali');
    let textValue = document.querySelector('.inputText').value;
    let colorValue = document.querySelector('.inputColor').value;
    // console.log(colorValue);
    let obj={
        text:textValue,
        color:colorValue
    }
    data.push(obj);
    console.log(data);
    showData();
}

function showData(){
    mainDiv.innerHTML='null'
   data.map((a)=>{
    let div = document.createElement('div');

    let h1 = document.createElement('h1');
    h1.textContent = a.text;
    h1.setAttribute('class', a.color);
    
    div.append(h1);
    mainDiv.append(div);
   });
}

function filterData(){
    mainDiv.innerHTML='null';
    let filteredDta
}



let obj = {
    color:'green',
    text: 'hello I am here',
}