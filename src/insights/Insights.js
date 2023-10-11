import ListDisplay from "./ListDisplay";

function Insights() {
    return (
        <div className="mc-section insight-section">
            <div className="heading-row">
                <h1 className="casual-text-color">Insights</h1>
            </div>
            <div id="insight-content-section">
                <ListDisplay
                    name="Top monthly expenses (by category)"
                    contentIndex={0}
                />
                <ListDisplay
                    name="Top monthly transactors"
                    contentIndex={1}
                />
            </div>
        </div>
    )
}

export default Insights;