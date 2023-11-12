import { MainContext } from "../components/MainContent";
import { useContext } from 'react'; 

function GoalDisplay(props) {

    const {handleDecimal} = useContext(MainContext);

    const decimalAmountValue = handleDecimal(props.amount);        
    const decimalAllowanceValue = handleDecimal(props.allowance);
    
    let typeClasses = props.type === "Saving" ? "goal-sub-header green-text" : "goal-sub-header gold-text";

    return (
        <div className="goal-display item-display">
            <h1 className="main-red-text goal-main-header">{props.timespan} goal</h1>
            <h4 className={typeClasses}>{props.type}</h4>
            <section className="goal-numbers">
                <span className="text-number-main">{decimalAmountValue} €</span><br />
                <span>Allowance: {decimalAllowanceValue} €</span>
            </section>
        </div>
    )
}

export default GoalDisplay;