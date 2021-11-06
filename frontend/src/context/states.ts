import { BarChartData, DonutChartData } from "types/context"
import { SalePage } from "types/sale"

export const INITIAL_BAR_CHART_STATE: BarChartData = {
    labels: { categories: [] },
    series: [{
        name: "",
        data: []
    }]
}

export const INITIAL_DONUT_CHART_STATE: DonutChartData = {
    labels: [],
    series: []
}

export const INITIAL_PAGE_STATE: SalePage = {
    content: [],
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
}