import Navbar from "components/Navbar"
import Footer from "components/Footer"
import DataTable from "components/DataTable"
import BarChart from "./components/BarChart"
import DonutChart from "./components/DonutChart"

export default function App() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <h1 className="text-primary py-2">Dashboard de vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-secondary text-center">Taxa de sucesso (%)</h5>
                        <BarChart></BarChart>
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-secondary text-center">Participação nas vendas</h5>
                        <DonutChart></DonutChart>
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="text-primary">Todas as vendas</h2>
                </div>
                <DataTable></DataTable>
            </div>
            <Footer></Footer>
        </>
    )
}