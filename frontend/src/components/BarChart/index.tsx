import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSucess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[]
    },
    series: SeriesData[];
}

const BarChart = () => {
    const [chartData, setChartData] = useState<ChartData>(
        {
            labels: {
                categories: []
            },
            series: [{
                name: '',
                data: []
            }]
        });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`).then(r => {
            const datas = r.data as SaleSucess[];
            const myLabels = datas.map(x => x.sellerName);
            const mySeries = datas.map(x => round(100 * x.deals / x.visited, 1));

            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: '% Sucesso',
                        data: mySeries
                    }
                ]
            });
        });
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={ chartData.series }
            type='bar'
            height='250' />
    );
}

export default BarChart;