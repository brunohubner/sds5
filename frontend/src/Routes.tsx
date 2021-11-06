/* eslint-disable react-hooks/exhaustive-deps */
import Home from "pages/Home"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { useContext, useEffect } from "react"
import { SaleContext } from "context/SaleContext"

export default function Routes() {
    const { getSaleSum, getSaleSuccess, getPage } = useContext(SaleContext)

    useEffect(() => {
        getSaleSum()
        getSaleSuccess()
        getPage()
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard></Dashboard>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}