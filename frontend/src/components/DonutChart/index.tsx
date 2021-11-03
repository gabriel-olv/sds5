import Chart from 'react-apexcharts';

const DonutChart = () => {

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

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }

    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type='donut'
            height='250' />
    );
}

export default DonutChart;