import "styles/DataTable.css"
import Pagination from "components/Pagination"
import { SaleContext } from "context/SaleContext"
import { useContext } from "react"
import { formatLocalDate } from "utils/formatLocalDate"

export default function DataTable() {
    const {page, sortByDate, sortBySeller, sortByAmount, 
        sortByDeals, sortByVisited } = useContext(SaleContext)

    return (
        <div className="d-flex flex-column align-items-center">
            <Pagination></Pagination>
            <div className="table-responsive mb-3 w-100">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th><button className="btn-sort" 
                                onClick={sortByDate}>Data</button></th>
                            <th><button className="btn-sort" 
                                onClick={sortBySeller}>Vendedor</button></th>
                            <th><button className="btn-sort" 
                                onClick={sortByVisited}>Clientes visitados</button></th>
                            <th><button className="btn-sort" 
                                onClick={sortByDeals}>Negócios fechados</button></th>
                            <th><button className="btn-sort" 
                                onClick={sortByAmount}>Valor</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {page.content?.map(x => {
                            return (
                                <tr key={x.id}>
                                    <td>{formatLocalDate(x.date, "dd/MM/yyyy")}</td>
                                    <td>{x.seller.name}</td>
                                    <td>{x.visited}</td>
                                    <td>{x.deals}</td>
                                    <td>{`R$ ${x.amount.toFixed(2).replace(".", ",")}`}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}