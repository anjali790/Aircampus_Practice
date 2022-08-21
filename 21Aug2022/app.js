const mainDiv = document.querySelector('#container');

let obj = {
    color:'green',
    text: 'hello I am here',
}

let div = document.createElement('div');

let h1 = document.createElement('h1');
h1.textContent = obj.text;
h1.setAttribute('class', obj.color);

div.append(h1);
mainDiv.append(div);