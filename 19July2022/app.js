//---------------------------------------------------OBJECT------------------------------------------------------
//In JS everything is an object.
//Property:- Variable present inside the object is called property.
//Method:- A function return inside a object is called method.
//---1---
let shubro = {
    fname : 'shubro',
    branch : 'ME',
    place : 'new delhi',
};
console.log(shubro['fname'],shubro.branch);
console.log(shubro);



//---2---
const circle = {
    radius : 1,
    location : {
        x : 2,
        y : 2,
    }
};
let loc = 'location'
console.log(circle['location']['y'],circle.location.y);
console.log(circle[loc]['x']);
// console.log(circle.loc.x); // throw an error



//---3---
function createSquare(side = 5){
    return {
        side : side,
        draw : function(){
            return "drawing circle";
        }
    }
};
let square1 = createSquare();
console.log(square1.side,square1.draw(),square1);
let square2 = createSquare(20);
console.log(square2.side,square2.draw(),square2);

