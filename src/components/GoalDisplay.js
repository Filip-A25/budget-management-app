function GoalDisplay(props) {
    return (
        <div className="goal-display item-display">
            <h1>{props.timespan} goal</h1>
            <h4>{props.type}</h4>
            <section className="goal-numbers">
                <span>{props.amount} €</span><br />
                <span>Allowance: {props.allowance} €</span>
            </section>
        </div>
    )
}

export default GoalDisplay;