import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const FraudBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch your fraud data here
    const fraudData = [
      { time: '2023-01-01', fraud: 100 },
      { time: '2023-01-02', fraud: 200 },
      { time: '2023-01-03', fraud: 300 },
      { time: '2023-01-01', fraud: 100 },
      { time: '2023-01-02', fraud: 200 },
      { time: '2023-01-03', fraud: 300 },
    ];

    setData(fraudData);
  }, []);

  const chartData = {
    labels: data.map(d => d.time),
    datasets: [
      {
        label: 'Fraud',
        data: data.map(d => d.fraud),
        backgroundColor: '#ff0000',
      },
    ],
  };

  const chartOptions = {
    title: {
      display: true,
    },
    scales: {
      xAxes: [
        {
          type: 'category',
          labels: data.map(d => d.time),
          ticks: {
            fontSize: 8,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 8,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      },
    },
    barPercentage: 0.5,
  };

  return (
    <Bar style={{width:"100%"}} data={chartData} options={chartOptions} />
  );
};

export default FraudBarChart;
