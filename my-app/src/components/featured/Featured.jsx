import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Featured = ({ data }) => {
  const TargetEarning = 200000;
  const [sixmonth, setSixMonth] = useState(0);

  const SixMonthEarning = () => {
    const today = new Date();
    const sixMonthsAgo = new Date(
      today.getFullYear(),
      today.getMonth() - 6,
      today.getDate()
    );
    const lastSixMonthsTransactions = data.filter((transaction) => {
      const transactionDate = new Date(transaction.timestamp);
      return transactionDate > sixMonthsAgo;
    });
    const totalPriceLastSixMonths = lastSixMonthsTransactions.reduce(
      (total, transaction) => {
        return total + transaction.totalprice;
      },
      0
    );

    return totalPriceLastSixMonths;
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const got6monthtotal = SixMonthEarning();
      setSixMonth(got6monthtotal);
    }
  });

  const TargetCalculate = () => {
    return (sixmonth / TargetEarning) * 100;
  };
  const [targetValue, setTargetValue] = useState(0);

  useEffect(() => {
    if (data && data.length > 0) {
      const gottarget = TargetCalculate();
      const roundedTarget = parseFloat(gottarget.toFixed(2));
      setTargetValue(roundedTarget);
    }
  });

  // last month sell

  const LastMonthSell = () => {
    const today = new Date();
    const oneMonthAgo = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
    );

    const lastOneMonthTransactions = data.filter((transaction) => {
      const transactionDate = new Date(transaction.timestamp);
      return transactionDate > oneMonthAgo;
    });

    const totalSaleLastOneMonth = lastOneMonthTransactions.reduce(
      (total, transaction) => {
        return total + transaction.totalprice;
      },
      0
    );
    return totalSaleLastOneMonth;
  };
  const [lastmonthearning, setLastMonthEarning] = useState(0);
  useEffect(() => {
    if (data && data.length > 0) {
      const gotlastmonth = LastMonthSell();
      setLastMonthEarning(gotlastmonth);
    }
  }, [data]);

  //// last 7 days sell

  const Last7days = () => {
    const today = new Date();
    const sevenDaysAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );

    const lastWeekTransactions = data.filter((transaction) => {
      const transactionDate = new Date(transaction.timestamp);
      return transactionDate > sevenDaysAgo;
    });

    const totalPriceLastWeek = lastWeekTransactions.reduce(
      (total, transaction) => {
        return total + transaction.totalprice;
      },
      0
    );
    return totalPriceLastWeek;
  };

  const [lastSevenDays, setLastSevenDays] = useState(0);

  useEffect(() => {
    if (data && data.length > 0) {
      const got7days = Last7days();
      setLastSevenDays(got7days);
    }
  });

  // Get the date 7 days ago from today

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={targetValue}
            text={`${targetValue}%`}
            strokeWidth={5}
          />
        </div>
        <p className="title">Total sales made in last 6 months</p>
        <p className="amount">{sixmonth}</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult neutral">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">
              <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
              {TargetEarning / 1000}k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">
                {" "}
                <CurrencyRupeeIcon style={{ fontSize: "16px" }} />
                {lastSevenDays / 1000}k
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">
              <CurrencyRupeeIcon style={{ fontSize: "15px" }} />
                {`${lastmonthearning / 1000}k`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
