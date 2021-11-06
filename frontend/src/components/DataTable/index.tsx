import axios from "axios"
import { useState, useEffect } from "react"
import { SalePage } from "types/sale"
import { formatLocalDate } from "utils/formatLocalDate"
import { BASE_URL } from "utils/request"

const INITIAL_TABLE_STATE: SalePage = {
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
}

export default function DataTable() {
    const [table, setTable] = useState<SalePage>(INITIAL_TABLE_STATE)

    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`)
            .then(resp => setTable(resp.data))
            .catch(error => console.log(error.message))
    })

    return (
        <div className="table-responsive mb-3">
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
                    {table.content?.map(x => {
                        return (
                            <tr key={x.id}>
                                <td>{formatLocalDate(x.date, "dd/MM/yyyy")}</td>
                                <td>{x.seller.name}</td>
                                <td>{x.visited}</td>
                                <td>{x.deals}</td>
                                <td>{x.amount.toFixed(2)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}