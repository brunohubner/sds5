import Home from "pages/Home"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter, Route, Switch } from "react-router-dom"

export default function Routes() {
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