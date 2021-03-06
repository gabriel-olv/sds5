import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(r => {
                const data = r.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.saleSum);

                setChartData({ labels: myLabels, series: mySeries });
            });
    }, []);

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
            series={chartData.series}
            type='donut'
            height='250' />
    );
}

export default DonutChart;