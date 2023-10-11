import TransactionTableData from './TransactionTableData';
import { useContext, useEffect } from 'react';
import { MainContext } from "../components/MainContent";
 
const tableData = [
    {key: 0, date: "2023-08-24", flow: 0, name: "Transaction 1", amount: 1330.44, category: "Work", categoryIndex: 4},
    {key: 1, date: "2023-08-31", flow: 1, name: "Transaction 2", amount: 13.42, category: "Food", categoryIndex: 0},
    {key: 2, date: "2023-09-05", flow: 1, name: "Transaction 3", amount: 150.00, category: "Gift", categoryIndex: 3}
]

function TransactionTable() {
    const {setDataAmount, transaction, transactionData, handleDataUpdate, dataKey, handleKeyUpdate, getTransactionMonth} = useContext(MainContext);

    useEffect(() => {
        handleDataUpdate(tableData);
    }, [])

    const expenseTotalMonth = (data) => {
        let totalExpenseMonth = 0;
        let firstTransaction = data[data.length - 1];
        for (let i = data.length - 1; i >= 0; i--) {
            if (getTransactionMonth(firstTransaction.date) === getTransactionMonth(data[i].date)) {
                if (data[i].flow === 1) {
                    totalExpenseMonth += data[i].amount;
                }
            } else break;
        }
        return totalExpenseMonth;
    }

    const incomeTotalMonth = (data) => {
        let totalIncomeMonth = 0;
        let firstTransaction = data[data.length - 1];
        for (let i = data.length - 1; i >= 0; i--) {
            if (getTransactionMonth(firstTransaction.date) === getTransactionMonth(data[i].date)) {
                if (data[i].flow === 0) {
                    totalIncomeMonth += data[i].amount;
                }
            } else break;
        }
        return totalIncomeMonth;
    }

    useEffect(() => {
        let incomeValueTotal = 0;
        let expenseValueTotal = 0;
        let totalValueTotal = 0;

        let incomeMonthValueTotal = incomeTotalMonth(transactionData);
        let expenseMonthValueTotal = expenseTotalMonth(transactionData);
        let totalMonthValueTotal = (incomeMonthValueTotal + expenseMonthValueTotal);

        for (const data of transactionData) {
            totalValueTotal += data.amount;

            if (data.flow === 0) incomeValueTotal += data.amount;
            else if (data.flow === 1) expenseValueTotal += data.amount;
        }

        const newDataValues = {
            incomeValue: incomeValueTotal.toFixed(2),
            expenseValue: expenseValueTotal.toFixed(2),
            totalValue: totalValueTotal.toFixed(2),
            incomeMonthlyValue: incomeMonthValueTotal.toFixed(2),
            expenseMonthlyValue: expenseMonthValueTotal.toFixed(2),
            totalMonthlyValue: totalMonthValueTotal.toFixed(2)
        }

        setDataAmount(newDataValues);
    }, [transactionData, setDataAmount]);

    useEffect(() => {
        if (transaction) {
            handleKeyUpdate();
        }
    }, [transaction])

    useEffect(() => {
        if (transaction) {
            transaction.key = dataKey;
            handleDataUpdate([...transactionData, transaction]);
        }
    }, [dataKey]);

    const handleDataDeletion = (index) => {
        handleDataUpdate((current) =>
            current.filter((transactionData) => transactionData.key !== index) 
    )}

    return (
        <table id="transaction-table">
            <tbody>
                <tr id="header-tr" className="tr-table-headrow">
                    <td>Date</td>
                    <td>Type</td>
                    <td>Name</td>
                    <td>Category</td>
                    <td>Amount</td>
                    <td></td>
                </tr>
                {transactionData.map((data) => 
                    <TransactionTableData 
                        key={data.key}
                        date={data.date}
                        flow={data.flow}
                        name={data.name}
                        amount={data.amount}
                        category={data.category}
                        onClickDelete={() => handleDataDeletion(data.key)}
                    />
                )}
            </tbody>
        </table>
    )
}


export default TransactionTable;