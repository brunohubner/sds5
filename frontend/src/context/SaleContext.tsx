import { INITIAL_BAR_CHART_STATE, INITIAL_DONUT_CHART_STATE, INITIAL_PAGE_STATE } from './states';
import { BarChartData, DonutChartData, SaleContextData, SaleProviderProps } from 'types/context';
import { Sale, SalePage, SaleSuccess, SaleSum } from 'types/sale';
import { createContext, useState, useEffect } from "react";
import { BASE_URL } from 'utils/request';
import { round } from 'utils/round';
import axios from 'axios';

export const SaleContext = createContext({} as SaleContextData)

export default function SaleProvider(props: SaleProviderProps) {

    const [barChartData, setBarChartData] = useState<BarChartData>(INITIAL_BAR_CHART_STATE)
    const [donutChartData, setDonutChartData] = useState<DonutChartData>(INITIAL_DONUT_CHART_STATE)
    const [page, setPage] = useState<SalePage>(INITIAL_PAGE_STATE)
    const [activePage, setActivePage] = useState(0)
    const [sorted, setSorted] = useState(false)

    function getSaleSuccess() {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then(resp => {
                const data = resp.data as SaleSuccess[]
                const labels = data.map(x => x.sellerName)
                const series = data.map(x => round(x.deals / x.visited * 100, 1))
                setBarChartData({
                    labels: { categories: labels },
                    series: [{
                        name: "% Sucesso",
                        data: series
                    }]
                })
            })
            .catch(error => console.log(error.message))
    }

    function getSaleSum() {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(resp => {
                const data = resp.data as SaleSum[]
                const labels = data.map(x => x.sellerName)
                const series = data.map(x => x.sum)
                setDonutChartData({ labels, series })
            })
            .catch(error => console.log(error.message))
    }

    function changePage (delta: number) {
        setActivePage(page.number + delta)
    }

    function getPage() {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
            .then(resp => setPage(resp.data))
            .catch(error => console.log(error.message))
    }

    function sortByDate() {
        if(sorted) {
            setPage(prevState => {
                const content = prevState.content.sort((a: Sale, b: Sale) => {
                    if(a.date < b.date) return -1
                    if(a.date > b.date) return 1
                    return 0
                })
                return { ...prevState, content }
            })
            setSorted(false)
        } else {
            setPage(prevState => {
                const content = prevState.content.sort((a: Sale, b: Sale) => {
                    if(a.date > b.date) return -1
                    if(a.date < b.date) return 1
                    return 0
                })
                return { ...prevState, content }
            })
            setSorted(true)
        }
    }

    function sortBySeller() {
        if(sorted) {
            setPage(prevState => {
                const content = prevState.content.sort((a: Sale, b: Sale) => {
                    if(a.seller.name < b.seller.name) return -1
                    if(a.seller.name > b.seller.name) return 1
                    return 0
                })
                return { ...prevState, content }
            })
            setSorted(false)
        } else {
            setPage(prevState => {
                const content = prevState.content.sort((a: Sale, b: Sale) => {
                    if(a.seller.name > b.seller.name) return -1
                    if(a.seller.name < b.seller.name) return 1
                    return 0
                })
                return { ...prevState, content }
            })
            setSorted(true)
        }
    }

    function sortByVisited() {
        if(sorted) {
            setPage(prevState => {
                const content = prevState.content.sort((a: Sale, b: Sale) => {
                    if(a.visited < b.visited) return -1
                    if(a.visited > b.visited) return 1
                    return 0
                })
                return { ...prevState, content }
            })
            setSorted(false)
        } else {
            setPage(prevState => {
                const content = prevState.content.sort((a: Sale, b: Sale) => {
                    if(a.visited > b.visited) return -1
                    if(a.visited < b.visited) return 1
                    return 0
                })
                return { ...prevState, content }
            })
            setSorted(true)
        }
    }

    function sortByDeals() {
        if(sorted) {
            setPage(prevState => {
                const content = prevState.content.sort((a: Sale, b: Sale) => {
                    if(a.deals < b.deals) return -1
                    if(a.deals > b.deals) return 1
                    return 0
                })
                return { ...prevState, content }
            })
            setSorted(false)
        } else {
            setPage(prevState => {
                const content = prevState.content.sort((a: Sale, b: Sale) => {
                    if(a.deals > b.deals) return -1
                    if(a.deals < b.deals) return 1
                    return 0
                })
                return { ...prevState, content }
            })
            setSorted(true)
        }
    }

    function sortByAmount() {
        if(sorted) {
            setPage(prevState => {
                const content = prevState.content.sort((a: Sale, b: Sale) => {
                    if(a.amount < b.amount) return -1
                    if(a.amount > b.amount) return 1
                    return 0
                })
                return { ...prevState, content }
            })
            setSorted(false)
        } else {
            setPage(prevState => {
                const content = prevState.content.sort((a: Sale, b: Sale) => {
                    if(a.amount > b.amount) return -1
                    if(a.amount < b.amount) return 1
                    return 0
                })
                return { ...prevState, content }
            })
            setSorted(true)
        }
    }

    useEffect(getPage, [activePage])

    return (
        <SaleContext.Provider value={{
            barChartData,
            donutChartData,
            activePage,
            page,
            getSaleSuccess,
            getSaleSum,
            getPage,
            changePage,
            sortByDate,
            sortBySeller,
            sortByVisited,
            sortByDeals,
            sortByAmount
        }}>
            {props.children}
        </SaleContext.Provider>
    )
}