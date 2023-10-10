import TopCategories from "./TopCategories";

function ListDisplay(props) {
    return (
        <div className="list-display">
            <section className="ld-title-section">
                <h3>{props.name}</h3>
            </section>
            <section className="ld-content-section">
                <TopCategories />
            </section>
        </div>
    )
}

export default ListDisplay;