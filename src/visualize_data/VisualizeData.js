import ChartSelect from "./ChartSelect";

const dataTitles = ["Top monthly expenses (by category)", "Top monthly transactors"];

function VisualizeData() {
    return (
        <section className="mc-section flex-column-left flex-column">
            <div className="heading-row">
                <h1 className="casual-text-color">Visualize Data</h1>
            </div>
            {dataTitles.map((title, index) => (
                <ChartSelect
                    key={index}
                    name={title}
                    dataIndex={index}
                />
            ))}
        </section>
    )
}

export default VisualizeData;