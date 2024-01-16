import React from 'react'
import "./Recharge.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
export default function RechargeList(props) {
  return (
  <>
    <div className='rechargelist'>
        <div className='pricetag'><CurrencyRupeeIcon/><h3>{props.data.pricePerMinute}</h3></div>
        <div className='timetag'>{props.data.time} Minutes</div>
    </div>
  </>
  )
}
