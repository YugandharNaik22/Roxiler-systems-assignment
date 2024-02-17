import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "./Redux/action";
import ProductList from "./Components/ProductList";
import axios from "axios";
import BarChart from "./Components/BarChart";
import PieChart from "./Components/PieChart";

function App() {
  let [month, setmonth] = useState("Mar");

  const [page, seTpage] = useState(1);
  const [limit, seTlimit] = useState(10);
  const [stat, setStat] = useState({});
  const [barChart, setBarChart] = useState({});
  const [pieData, setPieData] = useState({});
  // data from store
  const { tableData, totalRecords } = useSelector((store) => store);

  

  // console.log(totalRecords)
  const dispatch = useDispatch();

  const handlechange = (e) => {
    setmonth(e.target.value);
  };
  // to getStats Data
  const getStatData = async (m) => {
    let resp = await axios.get(
      `https://roxilerbackend.onrender.com/product/statastic?month=${m}`
    );
    setStat(resp?.data);
  };

  // to get BarChart Data
  const getBarChartData = async (m) => {
    let resp = await axios.get(
      `https://roxilerbackend.onrender.com/product/chart?month=${m}`
    );
    setBarChart(resp?.data);
  };

  // to get PieChart Data
  const getPieChartData = async (m) => {
    let resp = await axios.get(
      `/pie?month=${m}`
    );
    setPieData(resp?.data);
  };
  useEffect(() => {
    let m = 3;

    if (month == "Jan") {
      m = 1;
    } else if (month == "Feb") {
      m = 2;
    } else if (month == "Mar") {
      m = 3;
    } else if (month == "Apr") {
      m = 4;
    } else if (month == "May") {
      m = 5;
    } else if (month == "Jun") {
      m = 6;
    } else if (month == "Jul") {
      m = 7;
    } else if (month == "Aug") {
      m = 8;
    } else if (month == "Sep") {
      m = 9;
    } else if (month == "Oct") {
      m = 10;
    } else if (month == "Nov") {
      m = 11;
    } else if (month == "Dec") {
      m = 12;
    }

    dispatch(getTransactions(m, "", page, limit));

    getStatData(m);
    getBarChartData(m);
    getPieChartData(m);
  }, [month, page, limit]);

  const hadleClick = (val) => {
    seTpage((prev) => prev + val);
  };
  console.log(barChart);

  const TableStyle = {
    borderRow: "border-2 border-white p-[0.5rem] bg-red-400 text-black",
  };

  return (
    <div className="bg-slate-800 h-auto pl-[10%] pr-[10%] pt-[3rem] pb-[5rem] text-white ">
      <div className="text-2xl flex justify-center items-center text-center rounded-[50%] bg-white h-[13rem] w-[17%] m-auto">
        <p className="text-black break-words ">Transaction Dashboard</p>
      </div>

      <div className="mt-[3rem] flex justify-between ">
        <SearchBar month={month} />

        <div className="mt-[3rem] ">
          Select month:{" "}
          <select
            className="bg-yellow-100 text-black p-[0.5rem] rounded-full pl-[-.3rem] pr-[-.3rem]"
            value={month}
            onChange={handlechange}
          >
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="mt-[3rem]">
        <table>
          <thead>
            <tr className="border-2 border-white ">
              <th className={`${TableStyle.borderRow}`}>ID</th>
              <th className={`${TableStyle.borderRow}`}>Title</th>
              <th className={`${TableStyle.borderRow}`}>Description</th>
              <th className={`${TableStyle.borderRow}`}>Price</th>
              <th className={`${TableStyle.borderRow}`}>Category</th>
              <th className={`${TableStyle.borderRow}`}>Sold</th>
              <th className={`${TableStyle.borderRow}`}>Image</th>
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData?.map((el) => <ProductList key={el._id} item={el} />)}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="mt-[1rem] flex items-center justify-between">
        <div>Page No:{page}</div>
        <div>
          <button
            className="border-2 bg-yellow-100 text-black p-[0.5rem] rounded-lg"
            disabled={page === 1}
            onClick={() => hadleClick(-1)}
          >
            Previous
          </button>
          <span>-</span>
          <button
            className="border-2 bg-yellow-100 text-black p-[0.5rem] rounded-lg"
            disabled={page === Math.ceil(totalRecords/limit)}
            onClick={() => hadleClick(1)}
          >
            next
          </button>
        </div>
        <div>
          Per Page:{limit}{" "}
          <select
            name=""
            id=""
            className="text-black border-2 bg-yellow-100"
            onChange={(e) => seTlimit(e.target.value)}
          >
            <option value="10">10</option>
            <option value="5">5</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
      {/* statastic */}
      <div className="text-center mt-[3rem]">
        <span className="text-3xl">Statastic-{month}</span>
        <div className="w-[300px] m-auto rounded-xl bg-yellow-100 text-black mt-2 flex flex-col text-left  p-[2rem]">
          <div className="flex justify-between">
            <pre>Total Sale          {stat.totalSaleAmtOfMth}</pre>
          </div>
          <div className="flex justify-between">
            <pre>Total Sold Items    {stat.totalSoldPerMonth}</pre>
          </div>
          <div className="flex justify-between">
            <pre>Total Unsold Items  {stat.totalNotSoldPerMonth}</pre>
          </div>
        </div>
      </div>

      {/* BarChart */}
      <BarChart barChart={barChart} month={month} />

      {/* PieChart */}
      <PieChart pieData={pieData} month={month} />
    </div>
  );
}

export default App;
