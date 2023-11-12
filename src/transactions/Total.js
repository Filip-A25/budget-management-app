import { useState, useEffect, useContext } from 'react';
import { MainContext } from "../components/MainContent";

function Total(props) {
    const classArray = props.isActive ? "total-container standard-button total-active" : "total-container standard-button total-inactive"

    const {handleDecimal} = useContext(MainContext);

    const [displayTotalValue, setTotalValue] = useState(0);
    const [displayMonthlyValue, setMonthlyValue] = useState(0);

    useEffect(() => {
        const decimalTotalValue = handleDecimal(props.value);
        const decimalMonthlyValue = handleDecimal(props.monthlyValue);

        setTotalValue(decimalTotalValue);
        setMonthlyValue(decimalMonthlyValue);

    }, [props.value, props.monthlyValue])

    return(
        <button className={classArray} onClick={props.onClick}>
            <div className="heading-section">
                <h2 className="total-red">{props.name}</h2>
            </div>
            <div className="amount-section">
                <span className="total-amount-text casual-text-color">
                    {displayTotalValue} €
                </span>
            </div>
            <div className="secondary-heading-section casual-text-color">
                <h4>Monthly</h4>
            </div>
            <div className="amount-section">
                <span className="monthly-amount-section casual-text-color">{displayMonthlyValue} €</span>
            </div>
        </button>
    )
}

export default Total;