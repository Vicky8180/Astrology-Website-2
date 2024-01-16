import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {  useSelector } from "react-redux/es/hooks/useSelector";
const Chart = ({ aspect, title }) => {
 const data1=useSelector((state)=>state.transitionSaveState)
 console.log(data1)

const getmonth=(dateString)=>{
  const date = new Date(dateString);
const month = date.getMonth(); 
const humanReadableMonth = month + 1;
console.log(humanReadableMonth)
return humanReadableMonth
}
    useEffect(() => {
    if (data1 && data1.length > 0 ) {
      console.log(getmonth(data1[0].timestamp));
    }
  }, [data1]);
  



///// getting sell by each months array 

function getTotalPriceByMonth(tempu) {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setUTCMonth(sixMonthsAgo.getUTCMonth() - 6);

  const totalPriceByMonth = {};
  tempu.forEach(entry => {
    const entryDate = new Date(entry.timestamp);
    
    if (entryDate >= sixMonthsAgo) {
      const yearMonth = entryDate.toLocaleString('default', { month: 'long' }); 
      const yearMonthKey = entryDate.toISOString().slice(0, 7); 

      if (!totalPriceByMonth[yearMonthKey]) {
        totalPriceByMonth[yearMonthKey] = {
          month: yearMonth,
          Earning: 0
        };
      }
      totalPriceByMonth[yearMonthKey].Earning += entry.totalprice;
    }
  });

  
  const currentMonth = new Date().getMonth();

  
  for (let i = 5; i >= 0; i--) {
    const month = (currentMonth - i + 12) % 12; 
    const year = new Date().getFullYear() - (month === 11 ? 1 : 0); 
    const date = new Date(year, month, 1);
    const yearMonthKey = date.toISOString().slice(0, 7);

    if (!totalPriceByMonth[yearMonthKey]) {
      const monthName = date.toLocaleString('default', { month: 'long' });
      totalPriceByMonth[yearMonthKey] = {
        month: monthName,
        Earning: 0
      };
    }
  }
  const sortedMonths = Object.values(totalPriceByMonth).sort((a, b) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months.indexOf(a.month) - months.indexOf(b.month);
  });

  return sortedMonths;
}

const [last6monthofeach, setLast6MonthOfEach]=useState();
const polo=[];

useEffect(()=>{


  if(data1&& data1.length>0){
    const goteachofmonth=getTotalPriceByMonth(data1)
   console.log(goteachofmonth)
    for(let i=0;i<goteachofmonth.length-1;i++){

     polo.push(goteachofmonth[i])
       
    }

    setLast6MonthOfEach(polo);



  }
},[data1])


  return (

    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={last6monthofeach}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Earning"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
