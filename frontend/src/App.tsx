import Navbar from "components/Navbar"
import Footer from "components/Footer"
import DataTable from "components/DataTable"

export default function App() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <h1 className="text-primary">DS vendas</h1>
                <DataTable></DataTable>
            </div>
            <Footer></Footer>
        </>
    )
}