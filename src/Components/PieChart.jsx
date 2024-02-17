/* eslint-disable react/prop-types */

import { Chart } from "react-google-charts";
const PieChart = ({pieData,month}) => {
    console.log(pieData)

     const data = [
        ["Category", "Items"],
       
      ];
      for(let key in pieData?.total){
        data.push([key,pieData?.total[key]])
      }
  return (
    <div className="w-[60%] m-auto mt-[3rem] p-[2rem] bg-white">
       <span className="text-3xl text-black font-bold">Pie Chart - {month}</span>
       <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}

export default PieChart





export const options = {
  title: "My Daily Activities",
  is3D: true,
};


