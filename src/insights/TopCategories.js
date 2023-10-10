import { MainContext } from "../components/MainContent";
import { useContext, useState, useEffect } from 'react';

function TopCategories() {
    const {transactionData, categories} = useContext(MainContext);
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

    console.log(categoryTotal);

    const categoryConnection = {
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
        const newTotalAmounts = { ...categoryTotal };
        transactionData.forEach(transaction => {
            const currentIndex = transaction.categoryIndex;
            newTotalAmounts[currentIndex] += transaction.amount;
        })

        setCategoryTotal(newTotalAmounts);
    }, [transactionData])
    console.log(Object.values(categoryTotal)[1]);
    return (
        <table>
            <tbody>
            {categories.map((category, index) => (
                <tr key={category}>
                    <td>{category}</td>
                    {Object.keys(categoryTotal).map((key) => {
                        if (Object.values(categoryConnection)[index] === key) {
                            return <td>{Object.values(categoryTotal)[index]}</td>;
                        }
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default TopCategories;