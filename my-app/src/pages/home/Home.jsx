import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import React ,{useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {horoscopeState} from "../../action/index"

import { transitionSaveState } from "../../action/index";
import axios from "axios";
// import { duration } from "@mui/material";

const Home = () => {
  const [horoscope, setHoroscope] = useState([]);
  useEffect(() => {
    const getHoroscope = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL_PORT}/api/fetchhoro`);
        setHoroscope(data.data || []);
      } catch (error) {
        console.error("Error fetching horoscope data:", error);
        setHoroscope([]); 
      }
    };
    getHoroscope();
  }, []);


  const [data,setData]=useState([]);
  
    const fetch= async()=>{

      const info= await axios.get(`${process.env.REACT_APP_BASE_URL_PORT}/api/gettransition`);
     setData([...(info.data.data)])

    }



    useEffect(()=>{

    fetch();
    },[])

  const dispatch = useDispatch();
  dispatch(horoscopeState(horoscope))
  dispatch(transitionSaveState(data))



const [duration1, setDuration1] = useState(0); // Initialize to zero

const calculateDuration = () => {
  let totalDuration = 0;

  for (let i = 0; i < data.length; i++) {
    totalDuration += data[i].duration;
  }

  return totalDuration;
};

useEffect(() => {
  if (data && data.length > 0) {
    const totalDuration = calculateDuration();
    setDuration1(totalDuration);
  }
}, [data]);




const [earning, setEarning] = useState(0); // Initialize to zero

const calculateEarning = () => {
  let totalEarning = 0;

  for (let i = 0; i < data.length; i++) {
    totalEarning += data[i].totalprice;
  }

  return totalEarning;
};

useEffect(() => {
  if (data && data.length > 0) {
    const totalEarning = calculateEarning();
    setEarning(totalEarning);
  }
}, [data]);


// calculating todays total sell 



const [todaysSell,setTodaysSell]=useState(0);

const getTodaysSell=()=>{
  const today = new Date();
  const todayDate = today.toISOString().split('T')[0]; // Format: DD-MM-YYYY
  
  const todayTransactions = data.filter(transaction => {
    const transactionDate = new Date(transaction.timestamp).toISOString().split('T')[0];
    return transactionDate === todayDate;
  });
  

  const totalPriceToday = todayTransactions.reduce((total, transaction) => {
    return total + transaction.totalprice;
  }, 0);

  
  return totalPriceToday
}

useEffect(()=>{
   
  if(data && data.length>0){
   const gottotalprice=getTodaysSell();
   setTodaysSell(gottotalprice);
  }

},[data])










console.log(data);
  return (<>
  <div className="home">
      <Sidebar />
      {/* <Single/> */}
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="duration" dur={duration1} />
          <Widget type="order"   dur={data.length}/>
          <Widget type="earning"   dur={earning}/>
          <Widget type="balance"   dur={todaysSell}/>
        </div>
        <div className="charts">
          <Featured   data={data}/>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}  />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table  />
        </div>
      </div>
    </div>
     {/* <Single/> */}
  </>
    
  );
};

export default Home;
