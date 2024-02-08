function TransactionTableData(props) {

    return (
        <>
        <tr className={props.index == 0 || props.index % 2 == 0 ? "tr-table-row tr-table-row-color-lite" : "tr-table-row tr-table-row-color"}>
            <td>{props.date}</td>
            <td>{props.flow == 0 ? "Payment from" : "Payment to"}</td>
            <td className="bold">{props.name}</td>
            <td>{props.descText}</td>
            <td>{props.category}</td>
            <td>{props.amount.toFixed(2)} €</td>
            <td><button className="tr-delete-button" onClick={props.onClickDelete}>Delete</button></td>
        </tr>
        </>
    )
}

export default TransactionTableData;