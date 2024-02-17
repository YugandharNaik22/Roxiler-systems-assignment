/* eslint-disable react/prop-types */
// import React from 'react'


import Chart from "react-google-charts";


const BarChart = ({barChart,month}) => {
    console.log(barChart)
    let data = [
        ["Range","Item " ],
      ];

      
const options = {
  bars: "verticle",
  axes: {
    y: {
      0: { side: "left" },
      
    },
  },
};


    
      
      for(let key in barChart?.total){
        data.push([key,barChart?.total[key]])
      }
     console.log(data)
  return (
    <div className="w-[50%] bg-white m-auto mt-[5rem] p-[2rem]">
        <span className="text-black text-3xl font-bold">Bar Chart Stats -{month}</span>
<Chart
chartType="Bar"
width="500px"
height="400px"
data={data}
options={options}
/>
   </div>
  )
}

export default BarChart

