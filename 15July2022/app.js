//Anagram:- contains the same character, order of character can be different
let word1 = 'race';
let word2 = 'care';
if(word1.split('').sort().join('') == word2.split('').sort().join('')){
    console.log("anagram");
}else{
    console.log("not a anagram");
}

