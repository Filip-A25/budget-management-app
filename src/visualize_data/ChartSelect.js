import { useContext } from 'react';
import { MainContext } from "../components/MainContent";

function ChartSelect(props) {
    const {transactionData, categoryTotal, categoryMapping, transactors} = useContext(MainContext);

    let currentCategoryTotals;
    let currentTransactionData = [];
    let currentTransactionDataKeys = [];

    // Sum up all transactions by their categories.
    function getCategoryTotals() {
        currentCategoryTotals = categoryTotal;

        // Get unique keys from current transaction data to check for identical transactions.
        currentTransactionData.forEach(data => {
            currentTransactionDataKeys.push(data.key);
        });

        currentTransactionData = transactionData;

        transactionData.forEach(transaction => {
            let identical = 0;

            // Check for transactions already included in currentCategoryTotals to stop the repetition of the their amounts.
            if (!currentTransactionDataKeys.length == 0 && currentTransactionDataKeys.includes(transaction.key)) identical = 1;

            if (identical == 0) {
                let totalName = categoryMapping[transaction.category];
                currentCategoryTotals[totalName] += transaction.amount;
            }
        }); 
    }

    const handleChartDisplay = (chartType, indexAxis) => {
        switch(props.dataIndex) {
            case 0:
                getCategoryTotals();
                handleCategoriesDisplay(chartType, indexAxis);
                break;
            case 1:
                handleTransactorsDisplay(transactors);
        }
    }
    const QuickChart = require("quickchart-js");

    const handleCategoriesDisplay = (type, axis) => {
        let chartCategoryKeys = [], chartCategoryValues = [];

        // Map category totals key/value pairs in two separate arrays.
        Object.keys(categoryMapping).map((category, index) => {
            chartCategoryKeys.push(category);
            chartCategoryValues.push(currentCategoryTotals[Object.values(categoryMapping)[index]].toFixed(2));
        });

        console.log(chartCategoryKeys);
        console.log(chartCategoryValues);

        // Set up the chart with names and total values of categories.
        const topCategoriesChart = new QuickChart();

        let datasetValues = axis ? [{
            data: chartCategoryValues,
            borderWidth: 0,
            indexAxis: axis
        }] : [{
            data: chartCategoryValues,
            borderWidth: 0
        }]

        topCategoriesChart.setConfig({
            type: type,
            data: {
                labels: chartCategoryKeys,
                datasets: datasetValues
            },
            options: {
                title: {
                    display: true,
                    text: "Top categories by spending (Last 30 days)"
                },
                valueLabel: {
                    color: "white"
                },
                legend: {
                    display: true,
                    position: "right"
                },
                layout: {
                    padding: {
                        left: 15,
                        right: 15,
                        top: 2,
                        bottom: 2
                    }
                },
                plugins: {
                    datalabels: {
                        color: "rgb(245, 245, 245)",
                        font: {
                            weight: "bold"
                        }
                    }
                }
            }
        });

        window.open(topCategoriesChart.getUrl());
    }

    const handleTransactorsDisplay = () => {

    }

    return (
        <section className="chart-select-section">
            <h3 className="casual-text-color">{props.name}</h3>
            <ul className="chart-select-list">
                <li>
                    <button className="chart-select-li-btn" onClick={() => handleChartDisplay("doughnut")}>Doughnut chart</button>
                </li>
                <li>
                    <button className="chart-select-li-btn" onClick={() => handleChartDisplay("pie")}>Pie chart</button>
                </li>
                <li>
                    <button className="chart-select-li-btn">Horizontal bar chart</button>
                </li>
                <li>
                    <button className="chart-select-li-btn">Vertical bar chart</button>
                </li>
            </ul>
        </section>  
    )
}

export default ChartSelect;