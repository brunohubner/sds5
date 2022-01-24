import { SaleContext } from "context/SaleContext"
import { useContext } from "react"
import Chart from "react-apexcharts"

const options = {
    legend: {
        show: true
    }
}

export default function DonutChart() {
    const { donutChartData } = useContext(SaleContext)

    return (
        <Chart
            options={{ ...options, labels: donutChartData.labels }}
            series={donutChartData.series}
            type="donut"
            height={240}
        ></Chart>
    )
}
