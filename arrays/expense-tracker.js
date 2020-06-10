const account = {
    name : 'Ankit Raj',
    expenses : [],
    income :[],
    addIncome : function(description, income) {
        this.income.push({
            description : description,
            income : income
        })
    },
    addExpense : function(description, amount){
        this.expenses.push({
            description : description,
            amount : amount
        })
    },
    getAccountSummary : function(){
        let totalExpenses = 0
        let totalIncome = 0
        //Callback Function
        this.expenses.forEach(function (expenses){
            totalExpenses = totalExpenses + expenses.amount
        })

        this.income.forEach(function(income){
            totalIncome = totalIncome + income.income
        })

        return `${this.name} has a balance of ₹ ${totalIncome - totalExpenses}. ₹ ${totalIncome} in income. ₹ ${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 15000)
account.addExpense('Samosa', 1000)
account.addIncome('Income',20000)
console.log(account.getAccountSummary())

