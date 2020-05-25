let myAccount = {
    name: 'Ankit',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    // account = {}  -> breaked Binding of reference variable
    account.expenses = account.expenses + amount

    //console.log(account)

}

let addIncome = function(account, income){
    account.income = account.income + income

}

let resetAcount = function(account){
    account.expenses = 0
    account.income = 0

}

let getAccountSummary = function(account) {
    
    let balance = account.income - account.expenses
    
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
    

}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.5)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount))

resetAcount(myAccount)
console.log(getAccountSummary(myAccount))