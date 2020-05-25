let myAccount = {
    name : 'Ankit',
    expenses : 0,
    income : 0
}

let otherAccount = myAccount
otherAccount.income = 1000   // Changing my reference type

let addExpense = function (account, amount) {
   // account = {}  -> breaked Binding of reference variable
    account.expenses = account.expenses + amount

    console.log(account)

}

addExpense(myAccount, 25)
console.log(myAccount)