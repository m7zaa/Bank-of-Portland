

$(document).ready(function(){
$(".registerForm").submit(function() {
  event.preventDefault();
  $("#depositWithdrawal").show();
  $("#register").hide();
  var inputtedName = $("#inputtedName").val();
  var inputtedInitialDeposit = $("#initialDeposit").val();




  function Account(name, initialDeposit) {
    this.name = name;
    this.initialDeposit = initialDeposit;
  }

  var newAccount = new Account(inputtedName, inputtedInitialDeposit)

  console.log(newAccount);




})


})
