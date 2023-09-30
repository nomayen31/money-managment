document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString  = withdrawField.value;
    const newWithdrawAmount =  parseFloat(newWithdrawAmountString);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat([previousWithdrawTotalString])
    console.log(previousWithdrawTotal);

    
    const balanceTotalElement = document.getElementById('balance-total');
    
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    withdrawField.value = ''

    if(isNaN(newWithdrawAmount)){
        alert("Please enter a valid amount");
        return;
    }

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank er taka nai')
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // console.log(previousBalanceTotal);

    const newBanalceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = newBanalceTotal;



});