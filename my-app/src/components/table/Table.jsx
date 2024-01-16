import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../mainPage/Loader"
const List = () => {
const [data,setData]=useState([]);
  
    const fetch= async()=>{

      const info= await axios.get('http://localhost:5000/api/gettransition');
     setData([...(info.data.data)])

    }

    useEffect(()=>{

    fetch();
    },[])


    function formatDate(timestamp) {
      const date = new Date(timestamp);
      const day = date.getUTCDate();
      const month = date.getUTCMonth() + 1; // Adding 1 because January is 0
      const year = date.getUTCFullYear();
    
      // Pad day and month with leading zeros if needed
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
    
      return `${formattedDay}-${formattedMonth}-${year}`;
    }
    
    const [newdata,setNewData]=useState([]);
    useEffect(()=>{
    
      if(data && data.length>0){
        data.forEach(obj => {
          obj.timestamp = formatDate(obj.timestamp);
        });

      setNewData([...data]);
      }
    },[data])
    

  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    }]
   
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newdata.length>0 ?
            newdata.map((row) => (
            <TableRow key={row.transitionId}>
              <TableCell className="tableCell">{row.transitionId}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img alt="" src="https://img.freepik.com/free-icon/woman_318-157570.jpg " className="image" />
                  {row.service}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.timestamp}</TableCell>
              <TableCell className="tableCell">{row.totalprice}</TableCell>
              <TableCell className="tableCell">Online</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${"Approved"}`}>{"Approved"}</span>
              </TableCell>
            </TableRow> )) : <Loader/>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
