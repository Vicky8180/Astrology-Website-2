import React from 'react'
import "../navbar/navbar.css"
export default function footerBarrier() {
  return (
   <>
    <section id="newsletter" class="section-p1 section-m1">
    <div class="newstext">
        <h4>Sign up for Newslletters</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
    </div>
    <div class="form">
        <input type="text" placeholder=" Your email address"/>
        <button class="normal">Sign Up</button>
    </div>
</section>
   </>
  )
}
