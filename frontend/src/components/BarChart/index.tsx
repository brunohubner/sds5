import { SaleContext } from "context/SaleContext"
import { useContext } from "react"
import Chart from "react-apexcharts"

const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    }
}

export default function BarChart() {
    const { barChartData } = useContext(SaleContext)

    return (
        <Chart
            options={{ ...options, xaxis: barChartData.labels }}
            series={barChartData.series}
            type="bar"
            height={240} ></Chart>
    )
}