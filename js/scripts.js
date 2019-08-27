var inputtedName;
var inputtedInitialDeposit;
var inputtedWithdrawlAmount;
var balance;
var user1 = new Account();
var inputtedDepositAmount;
function Account() {
  this.name = "";
  this.balance = 0;
}

$(document).ready(function(){

$(".registerForm").submit(function(event) {
  event.preventDefault();
  $("#depositWithdrawal").show();
  $("#register").hide();
  inputtedName = $("#inputtedName").val();
  inputtedWithdrawlAmount = parseInt($("#withdrawalInput").val());
  inputtedBalance = parseInt($("#initialDeposit").val());
  user1.name = inputtedName;
  user1.balance=inputtedBalance;
  console.log(user1);





// console.log(user1);

// Account.prototype.deposit = function(inputtedDeposit) {
//   return balance + inputtedDepositAmount;
// }



//
$(".depositForm").submit(function(event) {

  event.preventDefault();
  inputtedDepositAmount = parseInt($("#depositInput").val());
console.log(user1);
console.log(inputtedDepositAmount);
 Account.prototype.deposit = function() {
  this.balance = inputtedDepositAmount + user1.balance;
  return this.balance;
}
$(".displayBalance").text("$" + user1.deposit());




  //  $(".displayBalance").append("<p>" + "$" + (inputtedInitialDeposit, inputtedDepositAmount) + "</p>" + "<br>" );
  // console.log(balance);
  // function Balance (initialDeposit, newDeposit, withdrawal) {
  //   this.initialDeposit = initialDeposit;
  //   this.newDeposit = newDeposit;
  //   this.withdrawal = withdrawal;
  // }
  // console.log(balance);
});

});

// $(".withdrawalForm").submit(function(event) {
//   event.preventDefault();
});
