import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {
    let chartData: ChartData = { labels: [], series: [] }

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(r => {
            const datas = r.data as SaleSum[];
            const myLabels = datas.map(x => x.sellerName);
            const mySeries = datas.map(x => x.saleSum);

            chartData = { labels: myLabels, series: mySeries };
            console.log(chartData);
        });

    const options = {
        options: {
            legend: {
                position: 'right'
            }
        },
        responsive: [{
            breakpoint: 768,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={ chartData.series }
            type='donut'
            height='250' />
    );
}

export default DonutChart;