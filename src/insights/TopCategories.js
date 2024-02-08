import { MainContext } from "../components/MainContent";
import { useContext, useEffect } from 'react';

function TopCategories() {
    const {transactionData, categoryTotal, setCategoryTotal, categoryMapping} = useContext(MainContext);

    let currentTransactionData = transactionData;

    useEffect(() => {   
        const currentTotalAmounts = { ...categoryTotal };

        currentTransactionData.forEach(transaction => {
            let totalName = categoryMapping[transaction.category];
            currentTotalAmounts[totalName] += transaction.amount;
        });

        setCategoryTotal(currentTotalAmounts);
    }, [transactionData]);

    return (
        <table>
            <tbody>
                {Object.keys(categoryMapping).map((category, index) => {
                    return <tr key={index} className="list-display-row">
                        <td className="casual-red-text bold">{category}</td>
                        <td className="bold">{categoryTotal[Object.values(categoryMapping)[index]].toFixed(2)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default TopCategories;