import TransactionTable from "./TransactionTable";
import Total from "./Total";
import { useState, createContext, useContext } from 'react';
import { MainContext } from "../components/MainContent";

const FlowContext = createContext(2);

const totals = ["Income", "Expenses", "Total"];

function Transactions() {
    const [popOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(2);

    const {categories, setTransactionData, amountValues, setDataAmount} = useContext(MainContext);

    const handleValueAssign = (index) => {
        if (index === 0) return amountValues.incomeValue;
        if (index === 1) return amountValues.expenseValue;
        if (index === 2) return amountValues.totalValue;
    }

    const handleMonthlyValueAssign = (index) => {
        if (index === 0) return amountValues.incomeMonthlyValue;
        if (index === 1) return amountValues.expenseMonthlyValue;
        if (index === 2) return amountValues.totalMonthlyValue;
    }

    const handleTransactionAdd = () => {
        let transactionFlow = document.getElementById("entry-payment-type").value === "Income" ? 0 : 1;

        let dateValue = document.getElementById("entry-date").value;
        let nameValue = document.getElementById("entry-name").value;
        let amountValue = document.getElementById("entry-amount").value;
        let categoryValue = document.getElementById("entry-category");

        if (dateValue && nameValue && amountValue) {
            if (/^[a-zA-Z]+$/.test(nameValue)) {
                setTransactionData({
                    date: dateValue,
                    flow: transactionFlow,
                    name: nameValue,
                    amount: parseInt(amountValue),
                    category: categoryValue.name,
                    categoryIndex: categoryValue.key
                });

                setOpen(false);
            }
        }
    }

    return (
        <>
            <div className={popOpen ? "popup-hide pos-rel" : "pos-rel"}>
            <div className="overview-section mc-section">
            {totals.map((total, index) => (
                <Total
                    key={index}
                    name={total}
                    value={handleValueAssign(index)}
                    onClick={() => setActiveIndex(index)}
                    isActive={index === activeIndex}
                    monthlyValue={handleMonthlyValueAssign(index)}
                />
            ))}
            </div>
            <div className="detailed-section mc-section">
                <div className="heading-row">
                    <h1 className="casual-text-color">Transactions</h1>
                    <button id="tsc-add-btn" onClick={() => setOpen(true)}>+</button>
                </div>
                <FlowContext.Provider value={{activeIndex, setDataAmount}}>
                    <TransactionTable />
                </FlowContext.Provider>
            </div>
            </div>
            {popOpen && (
            <div className="add-transaction-pop-up">
                <section className="add-transaction-heading padding-side"><h1>Add transaction</h1></section>
                <section className="add-transaction-input padding-side">
                    <h3>Date</h3>
                    <input type="date" id="entry-date"></input>
                    <h3>Payment type</h3>
                    <select id="entry-payment-type">
                        <option>Income</option>
                        <option>Expense</option>
                    </select>
                    <h3>Name</h3>
                    <input id="entry-name"></input>
                    <h3>Category</h3>
                    <select id="entry-category">
                        <option value="">Select category...</option>
                        {categories.map((category, index) => (
                            <option key={index} name={category} value={index}>{category}</option>
                        ))}
                    </select>
                    <h3>Price (€)</h3>
                    <input type="number" id="entry-amount" placeholder="0.00"></input>
                </section>
                <section className="add-transaction-verify">
                    <button className="standard-button" id="exit-transaction-button" type="button" onClick={() => setOpen(false)}>Back</button>
                    <button className="standard-button" id="add-transaction-verify-button" type="button" onClick={() => handleTransactionAdd()}>Add</button>
                </section>
            </div>
            )}
        </>
    )
}

export default Transactions;
export { FlowContext };