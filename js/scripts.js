var inputtedName;
var inputtedInitialDeposit;
var inputtedWithdrawlAmount;
var balance;
var deposit;
var inputtedDepositAmount;

$(document).ready(function(){

$(".registerForm").submit(function(event) {
  event.preventDefault();
  $("#depositWithdrawal").show();
  $("#register").hide();
  inputtedName = $("#inputtedName").val();
  inputtedInitialDeposit = parseInt($("#initialDeposit").val());
  inputtedWithdrawlAmount = parseInt($("#withdrawalInput").val());
  balance = inputtedInitialDeposit;
  deposit = balance +inputtedDepositAmount;
  $(".displayBalance").append("<li>" + balance + "</li>" + "<br>" );




$(".depositForm").submit(function(event) {
  event.preventDefault();
  inputtedDepositAmount = parseInt($("#depositInput").val());
  console.log(inputtedDepositAmount);
  $(".displayBalance").append("<li>" + inputtedDepositAmount + "</li>" + "<br>" );
  console.log(inputtedDepositAmount);
});

$(".withdrawalForm").submit(function(event) {
  event.preventDefault();

  $(".displayBalance").append("<li>" + balance - inputtedWithdrawlAmount + "</li>" + "<br>" );
});




  function Account(name, initialDeposit) {
    this.name = name;
    this.initialDeposit = initialDeposit;

  }





});




});
