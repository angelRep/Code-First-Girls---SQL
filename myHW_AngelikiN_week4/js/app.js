let goingtoshops = prompt("Would you like yo go to the shops?(yes or no)");
let spendingMoney = 0;
let moneyAvailable = 0;
let shoppingListPrices = [];
let totalPrice = 0;

if (goingtoshops.toLowerCase() === "yes") {
    spendingMoney = prompt("How much money are you going to spend?");
    
    if (spendingMoney > 30) {
        alert("Whoop! Big Spender!!");
    }
    else {
        alert("Better be carefull!!");
    }

    let next = true;
    let i = 1;
    while (next) {
        let price = prompt(`How much will the ${i} item will cost?`)
        shoppingListPrices.push(parseFloat(price, 0));
        next = prompt("Are there more items in your shopping list?").toLowerCase() === 'yes';
        i ++;
    }

    console.log(shoppingListPrices);

    for (j=0; j<shoppingListPrices.length; j++) {
        totalPrice += shoppingListPrices[j];
    }

    if (totalPrice > spendingMoney) {
        alert(`Your shopping will cost ${totalPrice - spendingMoney} more than the money you think you will spend!`);
    }
    else if (totalPrice < spendingMoney) {
        alert(`Your shopping will cost ${spendingMoney - totalPrice} less than the money you think you will spend!`);
    }
    else {
        alert("Your calculated spending money are correct!");
    }

    moneyAvailable = prompt("How much money do you have in your account?");

    if (moneyAvailable - totalPrice > 50) {
        alert("Enjoy your shopping!");
    }
    else if (moneyAvailable - totalPrice >= 0) {
        alert("Be carefull of your expenses!");
    }
    else {
        alert("Your balance is not enough. Better go shopping another day...");
    }
} 
