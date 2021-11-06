import { SalePage } from "./sale"
import { ReactNode } from "react"

export type SeriesData = {
    name: string
    data: number[]
}

export type BarChartData = {
    labels: { categories: string[] }
    series: SeriesData[]
}

export type DonutChartData = {
    labels: string[]
    series: number[]
}

export type SaleContextData = {
    barChartData: BarChartData
    donutChartData: DonutChartData
    page: SalePage
    activePage: number
    getSaleSuccess: () => void
    getSaleSum: () => void
    getPage: () => void
    changePage: (index: number) => void
    sortByDate: () => void
    sortBySeller: () => void
    sortByDeals: () => void
    sortByVisited: () => void
    sortByAmount: () => void
}

export type SaleProviderProps = {
    children: ReactNode
}