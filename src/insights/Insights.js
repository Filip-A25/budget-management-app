import ListDisplay from "./ListDisplay";
import { useState, useEffect } from 'react';
import GoalDsiplay from "../components/GoalDisplay";

let goals = [
    { timespan: "Weekly", type: "Saving", amount: 150.00, allowance: 15.00, notify: true },
    { timespan: "Monthly", type: "Other", amount: 1230.00, allowance: 100.00, notify: false},
    { timespan: "Yearly", type: "Other", amount: 640.00, allowance: 83.00, notify: false}
]

function Insights() {
    const [popOpen, setOpen] = useState(false);
    const [goalArray, setArrayValues] = useState([]);
    const handleGoalPush = () => {
        let timespanValue = document.getElementById("g-entry-timespan").value;
        let typeValue = document.getElementById("g-entry-type").value;
        let amountValue = document.getElementById("g-entry-amount").value;
        let allowanceValue = document.getElementById("g-entry-allowance").value;
        let notifyValue = document.getElementById("g-entry-notify").checked ? true : false;

        let newArrayData = {
            timespan: timespanValue,
            type: typeValue,
            amount: parseFloat(amountValue),
            allowance: parseFloat(allowanceValue),
            notify: notifyValue
        }

        goals.push(newArrayData);
        setArrayValues(goals);
        setOpen(false);
    }

    useEffect(() => {
        setArrayValues(goals);
    }, [goals]);

    return (
        <>
        <div className={popOpen ? "popup-hide" : ""}>
            <div className="mc-section insight-section">
                <div className="heading-row">
                    <h1 className="casual-text-color">Insights</h1>
                </div>
                <div className="insights-sub-section">
                    <ListDisplay
                        name="Top monthly expenses (by category)"
                        cIndex={0}
                    />
                    <ListDisplay
                        name="Top monthly transactors"
                        cIndex={1}
                    />
                </div>
            </div>
            <div className="mc-section goals-section">
                <div className="heading-row">
                    <h1 className="casual-text-color">Goals</h1>
                    <button className="data-add-btn" onClick={() => setOpen(true)}>+</button>
                </div>
                <div className="insights-sub-section flex-spaced">
                    {goalArray.map((goal, index) => (
                        <GoalDsiplay
                            key={index}
                            timespan={goal.timespan}
                            type={goal.type}
                            amount={goal.amount.toFixed(2)}
                            allowance={goal.allowance.toFixed(2)}
                        />
                    ))}
                </div>
            </div>
        </div>
        {popOpen && (
            <div className="mc-section insights-pop-up-section flex-centered">
                <form className="add-pop-up">
                    <section className="add-pop-up-heading padding-side"><h1>Set a goal</h1></section>
                    <section className="add-pop-up-input padding-side">
                        <h3>Timespan</h3>
                        <select name="timespan" id="g-entry-timespan">
                            <option value="">Select timespan...</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                        <h3>Type</h3>
                        <select name="type" id="g-entry-type">
                            <option value="">Select type...</option>
                            <option value="Saving">Saving</option>
                            <option value="Other">Other</option>
                        </select>
                        <h3>Amount</h3>
                        <input type="number" name="amount" id="g-entry-amount" placeholder="0.00"></input>
                        <h3> Allowance</h3>
                        <input type="number" name="allowance" id="g-entry-allowance" placeholder="0.00"></input>
                        <span className="add-pop-up-span"><h3 id="notify-header">Notify</h3><span className="flex-centered">?</span></span>
                        <span><input type="checkbox" id="g-entry-notify"></input> Yes</span>
                    </section>
                    <section className="add-pop-up-verify">
                    <button className="standard-button exit-pop-up-button" type="button" onClick={() => setOpen(false)}>Back</button>
                    <button className="standard-button add-pop-up-verify-button" type="button" onClick={() => handleGoalPush()}>Add</button>
                </section>
                </form>
            </div>
        )}
        </>
    )
}

export default Insights;