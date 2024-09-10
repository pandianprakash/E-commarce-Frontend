import React from "react";
import ApexCharts from "react-apexcharts";

const Dashboard = () => {
  // Options for the Barchart
  const options = {
    chart: {
      type: 'bar',
      height: '120px',
      fontFamily: 'Inter, sans-serif',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '18%',
        borderRadius: 3,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    colors: ['#8E21D9', '#FDBA8C'],
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
      data: [231, 122, 63, 421, 122, 323, 111, 202, 300, 489, 385, 200],
    },
  ];

  

  return (
    <div className="min-h-screen bg-white-100 p-6">
      {/* Top section: Count */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3"></h2>
        <div className="flex flex-wrap justify-center ml-40 gap-10">
          <div className="flex flex-col items-center justify-center w-48 h-24 bg-[#FFEEF1] rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#FFDDDD] p-4">
            <box-icon name="user" className="text-3xl mb-2 transition-colors duration-300 hover:text-[#FF6F61]"></box-icon>
            <p className="text-xl font-bold">125</p>
            <p className="text-sm text-gray-600">Total Employee</p>
          </div>

          <div className="flex flex-col items-center justify-center w-48 h-24 bg-[#D8FAE7] rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#B8F2B1] p-4">
            <box-icon name="spreadsheet" className="text-3xl mb-2 transition-colors duration-300 hover:text-[#2ECC71]"></box-icon>
            <p className="text-xl font-bold">2500</p>
            <p className="text-sm text-gray-600">Total Product</p>
          </div>

          <div className="flex flex-col items-center justify-center w-48 h-24 bg-[#FFF2DC] rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#FFE1B4] p-4">
            <box-icon name="objects-horizontal-right" className="text-3xl mb-2 transition-colors duration-300 hover:text-[#F39C12]"></box-icon>
            <p className="text-xl font-bold">5045</p>
            <p className="text-sm text-gray-600">Total Order</p>
          </div>

          <div className="flex flex-col items-center justify-center w-48 h-24 bg-[#DCFBFF] rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#A9D6E5] p-4">
            <box-icon type='solid' name="user-detail" className="text-3xl mb-2 transition-colors duration-300 hover:text-[#1E90FF]"></box-icon>
            <p className="text-xl font-bold">2355</p>
            <p className="text-sm text-gray-600">Total Customer</p>
          </div>
        </div>
      </div>

      {/* Bottom section: Barchart */}
      <div className="bg-white rounded-lg p-7 mr-19 ">
        <h2 className="text-2xl font-bold text-gray-900  mb-4">Monthly Data</h2>
        <div className="w-full flex justify-center  ml-9">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <ApexCharts options={options} series={series} type="bar" height={320} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
