import { SaleContext } from "context/SaleContext"
import { useContext } from "react"

export default function Pagination() {

    const { page, changePage } = useContext(SaleContext)

    return (
        <div className="row d-flex justify-content-center noSelect">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? "disabled" : ""}`}>
                        <button 
                            className="page-link"
                            onClick={() => changePage(-1)} >Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? "disabled" : ""}`}>
                        <button 
                            className="page-link"
                            onClick={() => changePage(1)} >Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}