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
    inputtedBalance = parseInt($("#initialDeposit").val());
    user1.name = inputtedName;
    user1.balance=inputtedBalance;
    $(".displayBalance").text("$" + user1.balance);

    $(".depositForm").submit(function(event) {
      event.preventDefault();
      inputtedDepositAmount = parseInt($("#depositInput").val());
      Account.prototype.deposit = function() {
        this.balance = inputtedDepositAmount + user1.balance;
        return this.balance;
      }
      $(".displayBalance").text("$" + user1.deposit());
    });

     $(".withdrawalForm").submit(function(event){
      event.preventDefault();
      inputtedWithdrawlAmount = parseInt($("#withdrawalInput").val());
      Account.prototype.withdrawal = function() {
        this.balance = user1.balance - inputtedWithdrawlAmount;
        return this.balance;
      }
      $(".displayBalance").text("$" + user1.withdrawal());
    });




  });
});
