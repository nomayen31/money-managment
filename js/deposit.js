document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFiend = document.getElementById('deposite-field');
    const newDepositedAmmount = parseFloat(depositFiend.value);
    // console.log(amountDeposited);
    const depositTotalElement = document.getElementById('depodite-total');

    const previousDepositeTotal = parseFloat(depositTotalElement.innerText);

    const currentDepositeTotal = previousDepositeTotal + newDepositedAmmount;


    depositTotalElement.innerText =currentDepositeTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositedAmmount;

    balanceTotalElement.innerText =currentBalanceTotal;








    depositFiend.value = '';      
})