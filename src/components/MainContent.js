import Dashboard from "../dashboard/Dashboard";
import Transactions from "../transactions/Transactions";
import Insights from "../insights/Insights";
import { CategoryContext } from "../App";
import { useState, useContext, createContext } from 'react';

const MainContext = createContext();

function MainContent() {
    const {activeContent} = useContext(CategoryContext);

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
    
    return(
        <section id="mc-content">
            <MainContext.Provider value={{transaction, setTransactionData, amountValues, setDataAmount,
            transactionData, handleDataUpdate, dataKey, handleKeyUpdate, getTransactionMonth}}>
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