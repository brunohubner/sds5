import axios from "axios"
import Pagination from "components/Pagination"
import { useState, useEffect } from "react"
import { SalePage } from "types/sale"
import { formatLocalDate } from "utils/formatLocalDate"
import { BASE_URL } from "utils/request"

const INITIAL_PAGE_STATE: SalePage = {
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
}

export default function DataTable() {
    const [page, setPage] = useState<SalePage>(INITIAL_PAGE_STATE)
    const [activePage, setActivePage] = useState(0)

    function changePage(index: number) {
        setActivePage(index)
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then(resp => setPage(resp.data))
            .catch(error => console.log(error.message))
    }, [activePage])

    return (
        <div className="d-flex flex-column align-items-center">
            <Pagination onPageChange={changePage} page={page}></Pagination>
            <div className="table-responsive mb-3 w-100">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
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