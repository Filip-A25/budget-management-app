import { MainContext } from "../components/MainContent";
import { useContext } from 'react';

function TopTransactors() {
    const {getTransactionMonth, transactionData} = useContext(MainContext);

    const getMonthlyTransactionsByName = (data) => {
        
    }

    return (
        <>
        </>
    )
}

export default TopTransactors;