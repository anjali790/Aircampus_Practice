//---------------------------------------------------OBJECT------------------------------------------------------
//In JS everything is an object.
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
console.log(circle.loc.x); // throw an error



//---3---
function createSquare(side = 5){
    return {
        side : side,
        draw : function(){
            return "drawing circle";
        }
    }
};