import ListDisplay from "./ListDisplay";
import { useState } from 'react';

function Insights() {
    const [popOpen, setOpen] = useState(false);

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
            <div className="mc-section">
                <div className="heading-row">
                    <h1 className="casual-text-color">Goals</h1>
                    <button className="data-add-btn" onClick={() => setOpen(true)}>+</button>
                </div>
                <div className="insights-sub-section">

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
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>
                        <h3>Type</h3>
                        <select name="type" id="g-entry-type">
                            <option value="">Select type...</option>
                            <option value="saving">Saving</option>
                            <option value="other">Other</option>
                        </select>
                        <h3>Amount</h3>
                        <input tyoe="number" name="amount" id="g-entry-amount" placeholder="0.00"></input>
                        <h3> Allowance</h3>
                        <input type="number" name="allowance" id="g-entry-allowance" placeholder="0.00"></input>
                        <h3 id="notify-header">Notify</h3>
                        <span><input type="checkbox" id="g-entry-notify"></input> Yes</span>
                    </section>
                    <section className="add-pop-up-verify">
                    <button className="standard-button exit-pop-up-button"type="button" onClick={() => setOpen(false)}>Back</button>
                    <button className="standard-button add-pop-up-verify-button" type="button">Add</button>
                </section>
                </form>
            </div>
        )}
        </>
    )
}

export default Insights;