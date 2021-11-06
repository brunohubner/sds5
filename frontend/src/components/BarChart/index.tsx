import axios from "axios"
import { useEffect, useState } from "react"
import Chart from "react-apexcharts"
import { SaleSuccess } from "types/sale"
import { BASE_URL } from "utils/request"
import { round } from "utils/round"

type SeriesData = {
    name: string
    data: number[]
}

type BarChartData = {
    labels: { categories: string[] }
    series: SeriesData[]
}

const INITIAL_BAR_CHART_STATE: BarChartData = {
    labels: { categories: [] },
    series: [{
        name: "",
        data: []
    }]
}

export default function BarChart() {
    const [barChartData, setBarChartData] = useState<BarChartData>(INITIAL_BAR_CHART_STATE)

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    }

    useEffect(() => {
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
    }, [])

    // const mockData = {
    //     labels: {
    //         categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //     },
    //     series: [
    //         {
    //             name: "% Sucesso",
    //             data: [43.6, 67.1, 67.7, 45.6, 71.1]
    //         }
    //     ]
    // };

    return (
        <Chart
            options={{ ...options, xaxis: barChartData.labels }}
            series={barChartData.series}
            type="bar"
            height={240} ></Chart>
    )
}