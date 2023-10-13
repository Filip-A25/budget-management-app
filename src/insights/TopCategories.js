import { MainContext } from "../components/MainContent";
import { useContext, useState, useEffect } from 'react';

function TopCategories() {
    const {transactionData} = useContext(MainContext);
    const [categoryTotal, setCategoryTotal] = useState({
        foodTotal: 0,
        fuelTotal: 0,
        rentTotal: 0,
        giftTotal: 0,
        workTotal: 0,
        schoolTotal: 0,
        entertainmentTotal: 0,
        hobbyTotal: 0,
        healthTotal: 0,
        houseTotal: 0,
        otherTotal: 0
    });

    const categoryMapping = {
        Food: "foodTotal",
        Fuel: "fuelTotal",
        Rent: "rentTotal",
        Gift: "giftTotal",
        Work: "workTotal",
        School: "schoolTotal",
        Entertainment: "entertainmentTotal",
        Hobby: "hobbyTotal",
        Health: "healthTotal",
        House: "houseTotal",
        Other: "otherTotal"
    }

    useEffect(() => {   
        const currentTotalAmounts = { ...categoryTotal };

        transactionData.forEach(transaction => {
            let totalName = categoryMapping[transaction.category];
            currentTotalAmounts[totalName] += transaction.amount;
        });

        setCategoryTotal(currentTotalAmounts);
    }, [transactionData])
    
    return (
        <table>
            <tbody>
                {Object.keys(categoryMapping).map((category, index) => {
                    return <tr key={index} className="list-display-row">
                        <td className="casual-red-text">{category}</td>
                        <td>{categoryTotal[Object.values(categoryMapping)[index]].toFixed(2)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default TopCategories;