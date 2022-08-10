//Lexical:-
function a(){
    var b = 20;
    function c(){
        console.log(b);
    }
    c();
}
// var b = 20;
a();




function preparationOfFood(callbackOfEatingAndPaying) {
    setTimeout(() => {
      console.log("preparing paav bajji....");
      console.log("Server deliver the food to the table");
      callbackOfEatingAndPaying(payingBillAndTips); // eatingFoodAndPayingBill
    }, 3000);
  }
  
  function payingBillAndTips() {
    console.log("paying the bill");
    console.log("leaving the hotel");
  }
  
  function eatingFoodAndPayingBill(callbackPayment) {
    setTimeout(() => {
      console.log("eating paav bajji....");
      callbackPayment(); //payingBillAndTips
    }, 2000);
  }
  
  // main code
  function dinnerScenario() {
    console.log("Entering into the hotel");
    console.log("calling the server and order paav bajji");
    console.log("server informing the chef to prepare food");
    preparationOfFood(eatingFoodAndPayingBill);
  }
  
  dinnerScenario();
  