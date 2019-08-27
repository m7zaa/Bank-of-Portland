
//stored variables up to to make them global
var inputtedName;
var inputtedInitialDeposit;
var inputtedWithdrawlAmount;
var balance;
var checkingAccount = new Account();
var inputtedDepositAmount;

//constructor to make accounts
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
//adding inputted name to object
    checkingAccount.name = inputtedName;
    checkingAccount.balance=inputtedBalance;

    $(".displayBalance").text("$" + checkingAccount.balance);
    $("#welcomeName").text(" " + inputtedName + ".");

    $(".depositForm").submit(function(event) {
      event.preventDefault();
      inputtedDepositAmount = parseInt($("#depositInput").val());

//This resets input field after each submission
      $("input#depositInput").val("");

  //prototype method to calculate deposits and return to object
      Account.prototype.deposit = function() {
        this.balance = inputtedDepositAmount + checkingAccount.balance;
        return this.balance;
      }

      //displays new balance using .deposit method
      $(".displayBalance").text("$" + checkingAccount.deposit());
    });

     $(".withdrawalForm").submit(function(event){
      event.preventDefault();
      inputtedWithdrawlAmount = parseInt($("#withdrawalInput").val());

      //This resets input field after each submission
      $("input#withdrawalInput").val("");

      //prototype method to calculate withdrawals and return to object

      Account.prototype.withdrawal = function() {
        this.balance = checkingAccount.balance - inputtedWithdrawlAmount;
        return this.balance;
      }

      //displays updated balance using .withdrawal method
      $(".displayBalance").text("$" + checkingAccount.withdrawal());
    });




  });
});
