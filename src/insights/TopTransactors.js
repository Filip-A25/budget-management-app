import { MainContext } from "../components/MainContent";
import { useState, useContext, useEffect } from 'react';

function TopTransactors() {
    const {getTransactionMonth, transactionData} = useContext(MainContext);
    const [transactors, setTransactors] = useState({});

    const handleTransactors = (transactions) => {
        let firstTransaction = transactions[transactions.length - 1];
        let i;
        for (i = transactions.length - 1; i >= 0; i--) {
            if (getTransactionMonth(transactions[i].date) === getTransactionMonth(firstTransaction.date)) {
                let currentTransactors = { ...transactors };
                let currentAmount = transactions[i].amount;

                if (!Object.keys(transactors).indexOf(transactions[i].name) > -1) {
                    currentTransactors[transactions[i].name] = currentAmount;
                } else {
                    currentTransactors[transactions[i].name] += currentAmount; 
                }

                setTransactors(currentTransactors);
            }
        }
    }

    useEffect(() => {
        handleTransactors(transactionData);
    }, [transactionData])

    return (
        <table>
            <tbody>
                {Object.keys(transactors).map((transactor, index) => {
                    return <tr key={index} className="list-display-row">
                        <td className="casual-red-text">{transactor}</td>
                        <td>{transactors[transactor].toFixed(2)}</td>
                    </tr>;
                })}
            </tbody>
        </table>
    )
}

export default TopTransactors;