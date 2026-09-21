import '../Data/data'

let amount=0;
function expensesCalculator(expenses){
return(
    <>
    <div>
    <h2>Title: {expenses.title}</h2>
    <h2>Category:{expenses.category}</h2>
    <h2>Amount:{expenses.amount}</h2>
    </div>
    </>
)
}

export default expensesCalculator;  