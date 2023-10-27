import { Pie, Bar } from 'react-chartjs-2';

const FraudChart = () => {
  // Dummy data for pie chart
  const pieChartData = {
    labels: ['Genuine', 'Fraud'],
    datasets: [
      {
        data: [80, 20], // Replace with actual data
        backgroundColor: ['green', 'red'],
      },
    ],
  };

  // Dummy data for bar chart
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Fraud Cases',
        data: [10, 5, 15, 8, 12], // Replace with actual data
        backgroundColor: 'red',
      },
      {
        label: 'Genuine Cases',
        data: [90, 95, 85, 92, 88], // Replace with actual data
        backgroundColor: 'green',
      },
    ],
  };

  return (
    <div>
      <div>
        <h2>Pie Chart: Rate of Fraud</h2>
        <Pie data={pieChartData} />
      </div>

      <div>
        <h2>Bar Chart: Fraud Cases Over Time</h2>
        <Bar data={barChartData} />
      </div>
    </div>
  );
};

export default FraudChart;
