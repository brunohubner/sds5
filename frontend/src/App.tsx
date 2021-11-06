import SaleProvider from "context/SaleContext"
import Routes from "Routes"

export default function App() {
    return (
        <SaleProvider>
            <Routes></Routes>
        </SaleProvider>
    )
}