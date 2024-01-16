import React from "react";
import "./Faq.css";

export default function FaqItem(props) {
  return (
    <>
      <div className="col-lg-6">
        <h5>{props.heading}</h5>
        <p className="text-muted">{props.para}</p>
      </div>
  

    </>
  );
}
