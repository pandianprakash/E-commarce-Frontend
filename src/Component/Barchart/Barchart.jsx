  import React from 'react';
  import ApexCharts from 'react-apexcharts';

  
  const Barchart = () => {
    const options = {
      chart: {
        type: 'bar',
        height: '120px',
        fontFamily: 'Inter, sans-serif',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '13%',
          borderRadius: 3,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'], 
        labels: {
          style: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem', // text-sm
            colors: '#4B5563', // text-gray-500
          },
        },
      },
      yaxis: {
        title: {
          text: 'Amount',
          style: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem', // text-sm
            color: '#4B5563', // text-gray-500
          },
        },
      },
      fill: {
        opacity: 1,
      },
      colors: ['#1A56DB', '#FDBA8C'],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
      tooltip: {
        theme: 'light',
      },
    };
  
    const series = [
      {
        name: 'Amount',
        data: [231, 122, 63, 421, 122, 323, 111,202,300,489,385,200],
      },
    ];
  
    return (
      <div className="bg-white rounded-lg p-4 md:p-3">
        {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">Monthly Amounts</h2> */}
        <div className="chart-container">
        <div className="w-full flex justify-center pl-30 mt-48 ">
        <div className="w-1/2 ">
          <ApexCharts options={options} series={series} type="bar" height={320} />
        </div>
        </div>
      </div>
      </div>
    );
  };

  export default Barchart;