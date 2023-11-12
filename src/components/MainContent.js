import Dashboard from "../dashboard/Dashboard";
import Transactions from "../transactions/Transactions";
import Insights from "../insights/Insights";
import { CategoryContext } from "../App";
import { useState, useContext, createContext } from 'react';

const MainContext = createContext();

function MainContent() {
    const {activeContent} = useContext(CategoryContext);

    const [categories, updateCategories] = useState(["Food", "Fuel", "Rent", "Gift", "Work", "School", "Entertainment", "Hobby", "Health", "House", "Other"]);
    const [transaction, setTransactionData] = useState(0);
    const [amountValues, setDataAmount] = useState({
        incomeValue: 0,
        expenseValue: 0,
        totalValue: 0,
        incomeMonthlyValue: 0,
        expenseMonthlyValue: 0,
        totalMonthlyValue: 0
    });
    const [transactionData, updateTotalArray] = useState([]);
    const [dataKey, setDataKey] = useState(2);

    const handleDataUpdate = (data) => {
        updateTotalArray(data);
    }

    const handleKeyUpdate = () => {
        setDataKey(prevDataKey => prevDataKey + 1);
    }

    const getTransactionMonth = (date) => {
        let monthValue = date.split("").slice(5, 7).join("");
        return parseInt(monthValue);
    }
    
    const handleDecimal = (value) => {
        let displayValue = value.toString();
        if (value >= 1000) {
            displayValue = displayValue.split("");
            let commaPos;

            if (value < 10000) commaPos = 1;
            else if (value < 100000) commaPos = 2;
            else commaPos = 3;

            displayValue.splice(commaPos, 0, ",")

            return displayValue.join("");
        } else return displayValue;
    }

    return(
        <section id="mc-content">
            <MainContext.Provider value={{categories, transaction, setTransactionData, amountValues, setDataAmount,
            transactionData, handleDataUpdate, dataKey, handleKeyUpdate, getTransactionMonth, handleDecimal}}>
                {activeContent === "Dashboard" ? (
                    <Dashboard />
                ) : activeContent === "Transactions" ? (
                    <Transactions />
                ) : (
                    <Insights />
                )}
            </MainContext.Provider>
        </section>
    )
}

export default MainContent;
export { MainContext };