import axios from "axios"
import Chart from "react-apexcharts"
import { useEffect, useState } from "react"
import { SaleSum } from "types/sale"
import { BASE_URL } from "utils/request"

type DonutChartData = {
    labels: string[]
    series: number[]
}

const INITIAL_DONUT_CHART_STATE: DonutChartData = {
    labels: [],
    series: []
}

export default function DonutChart() {
    const [donutChartData, setDonutChartData] = useState<DonutChartData>(INITIAL_DONUT_CHART_STATE)

    
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(resp => {
            const data = resp.data as SaleSum[]
            const labels = data.map(x => x.sellerName)
            const series = data.map(x => x.sum)
            setDonutChartData({ labels, series })
        })
    }, [])
    
    const options = {
        legend: {
            show: true
        }
    }

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }

    return (
        <Chart 
            options={{ ...options, labels: donutChartData.labels }}
            series={donutChartData.series}
            type="donut"
            height={240} ></Chart>
    )
}