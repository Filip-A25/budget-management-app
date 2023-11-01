import TopCategories from "./TopCategories";
import TopTransactor from "./TopTransactors";

function ListDisplay(props) {
    return (
        <div className="list-display item-display">
            <section className="ld-title-section">
                <h3>{props.name}</h3>
            </section>
            <section className="ld-content-section">
                {props.cIndex === 0 ? (
                    <TopCategories />
                ) : (
                    <TopTransactor />
                )}
            </section>
        </div>
    )
}

export default ListDisplay;