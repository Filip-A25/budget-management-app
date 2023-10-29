import { useContext } from "react";
import { FlowContext } from "./Transactions";


function TransactionTableData(props) {
    const {activeIndex} = useContext(FlowContext);

    return (
        <tr className={props.flow === activeIndex || activeIndex === 2 ? "tr-table-row" : "tr-table-row hidden"}>
            <td>{props.date}</td>
            <td>{props.flow == 0 ? "Payment from" : "Payment to"}</td>
            <td className="main-red-text">{props.name}</td>
            <td>{props.descText}</td>
            <td>{props.category}</td>
            <td>{props.amount.toFixed(2)} €</td>
            <td><button className="tr-delete-button" onClick={props.onClickDelete}>Delete</button></td>
        </tr>
    )
}

export default TransactionTableData;