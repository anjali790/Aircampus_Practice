//Anagram:- contains the same character, order of character can be different
let word1 = 'race';
let word2 = 'care';
if(word1.split('').sort().join('') == word2.split('').sort().join('')){
    console.log("anagram");
}else{
    console.log("not a anagram");
}






//-----------------------------------------------------------------------------------------------------------------------------------------
//Binary search:-
let binaryArray = [12,13,24,78,97,101];
let start = 0;
let num=97;
let end = binaryArray.length;
while(start <= end){
    let middle = Math.floor((start+end)/2);
    if(binaryArray[middle] == num){
        console.log(middle);
        break;
    }else if(num > binaryArray[middle]){
        start=middle+1;
    }else{
        end=middle-1;
    }
}