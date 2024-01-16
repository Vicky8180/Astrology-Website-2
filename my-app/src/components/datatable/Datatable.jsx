import "./datatable.scss";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows,GetHoroscope } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import {  useSelector } from "react-redux/es/hooks/useSelector";


const Datatable = () => {
  const [data, setData] = useState(userRows);
  const horoscopeState=useSelector((state)=>state.horoscopeState);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };








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
  
    if(horoscopeState && horoscopeState.length>0){
      horoscopeState.forEach(obj => {
        obj.todate = formatDate(obj.todate);
      });

    setNewData([...horoscopeState]);

    console.log(newdata)
    }
  },[horoscopeState])










  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/admin/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={newdata}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId = {(newdata) =>  newdata._id }
      />
    </div>
  );
};

export default Datatable;
