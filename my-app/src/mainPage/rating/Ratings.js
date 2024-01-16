import React from 'react'
import "./Rating.css"
import Rating1 from './Rating1'
export default function Ratings() {
  return (<>
  <div  className='rating-first-heading'>
  <h1> What People Says About Us</h1>
  </div>
 
     <div  className='ratings-1'>
<div className='rating-content'>

<Rating1/>
<Rating1/>
<Rating1/>
<Rating1/>
    
</div>

     </div>
  </>
  )
}
