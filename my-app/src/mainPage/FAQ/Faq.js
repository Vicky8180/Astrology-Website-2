import React, { useState } from "react";
import "./Faq.css";
import "./FaqItem";
import FaqItem from "./FaqItem";
import { useNavigate } from "react-router-dom";
export default function Faq() {

    const navigate=useNavigate();

    const navigateToContact=()=>{

        navigate(
'/contact'
        )
    }
  const GeneralData = [
    {
      heading: "Where does it come from ?",
      para: "If several languages coalesce, the grammar of the resulting language is more simpleand regular than that of the individual languages. The new common language will be more simple and regular than the existing",
    },
    {
      heading: "Why do we use it ?",
      para: "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing",
    },

    {
      heading: "Where does it come from ?",
      para: "If several languages coalesce, the grammar of the resulting language is more simpleand regular than that of the individual languages. The new common language will be more simple and regular than the existing",
    },

    {
      heading: "Where does it come from ?",
      para: "If several languages coalesce, the grammar of the resulting language is more simpleand regular than that of the individual languages. The new common language will be more simple and regular than the existing",
    },
  ];

  const AstrologyData = [
    {
      heading: "What is astrology ?",
      para: "Astrology is a belief system that suggests a relationship between the positions of celestial bodies (such as planets and stars) and events that happen on Earth, including human lives.",
    },
    {
      heading: "How does astrology work ?",
      para: "Astrology is based on the idea that the positions of celestial bodies at the time of a person's birth can influence their personality, behavior, and life events. Different astrological systems use charts and interpretations to map these influences.",
    },

    {
      heading: "What is a horoscope ?",
      para: "A horoscope is a forecast based on astrological principles, usually for a specific period (such as daily, weekly, or monthly). It interprets the positions of celestial bodies to predict events or influences in a person's life.",
    },

    {
      heading: "Can astrology predict the future?",
      para: "Astrology is not scientifically proven to predict the future with certainty. It offers insights, tendencies, and potentials based on celestial positions, but it's not a guaranteed predictor of specific events.",
    },
  ];

  const PolicyData = [
    {
      heading: "What is astrology Anpoop?",
      para: "Astrology is a belief system that suggests a relationship between the positions of celestial bodies (such as planets and stars) and events that happen on Earth, including human lives.",
    },
    {
      heading: "How does astrology work ?",
      para: "Astrology is based on the idea that the positions of celestial bodies at the time of a person's birth can influence their personality, behavior, and life events. Different astrological systems use charts and interpretations to map these influences.",
    },

    {
      heading: "What is a horoscope ?",
      para: "A horoscope is a forecast based on astrological principles, usually for a specific period (such as daily, weekly, or monthly). It interprets the positions of celestial bodies to predict events or influences in a person's life.",
    },

    {
      heading: "Can astrology predict the future?",
      para: "Astrology is not scientifically proven to predict the future with certainty. It offers insights, tendencies, and potentials based on celestial positions, but it's not a guaranteed predictor of specific events.",
    },
  ];
  const [astro, setAstro]=useState(false);
  const [policy, setPolicy]=useState(false);
  const [genarel, setGeneral]=useState(true);

   const genarelHandle=()=>{
    setGeneral(true);
    setAstro(false);
    setPolicy(false)
   }

   
   const astrologyHandle=()=>{
    setAstro(true);
    setGeneral(false)
    setPolicy(false)
   }
   
   const policyHandle=()=>{
    setPolicy(true);
    setGeneral(false)
    setAstro(false)
   }

  return (
    <>
      <div className="faq-main-body">
        <div className="container">
          <div className="row" id="faq-row">
            <div className="col-lx-12">
              <div className="card">
                <div className="card-body" id="faq-card-body">
                  <div className="row justify-content-center mt-4">
                    <div className="col-xl-5 col-lg-8">
                      <div className="text-center">
                        <h3>Frequently Asked Questions?</h3>
                        <p className="text-muted">
                          If several languages coalesce, the grammar of the
                          resulting language is more simple and regular than
                          that of the individual
                        </p>
                        <div>
                          <button
                            type="button"
                            className="btn btn-success me-2"
                            onClick={navigateToContact}
                          >
                            Email Us
                          </button>
                          <button type="button"  onClick={navigateToContact} className="btn btn-success">
                            Send us a tweet
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center mt-5">
                    <div className="col-9">
                      <ul
                        className="nav nav-tabs  nav-tabs-custom nav-justified justify-content-center faq-tab-box"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-genarel-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-genarel"
                            type="button"
                            role="tab"
                            aria-controls="pills-genarel"
                            aria-selected="true"
                            onClick={genarelHandle}
                          >
                            <span className="font-size-16">
                              General Questions
                            </span>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-privacy_policy-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-privacy_policy"
                            type="button"
                            role="tab"
                            aria-controls="pills-privacy_policy"
                            aria-selected="false"
                            onClick={astrologyHandle}
                          >
                            <span className="font-size-16">Astrology</span>
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-teachers-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-pricing_plan"
                            type="button"
                            role="tab"
                            aria-controls="pills-pricing_plan"
                            aria-selected="false"
                            onClick={policyHandle}
                          >
                            <span className="font-size-16">Privacy Policy</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-9">
                      <div className="tab-content pt-3" id="pills-tabContent">
                        <div
                          className="tab-pane fade active show"
                          id="pills-genarel"
                          role="tabpanel"
                          aria-labelledby="pills-genarel-tab"
                        >
                          <div className="row g-4 mt-2">
                            {genarel &&  (GeneralData.map((item) => (
                              <FaqItem
                                heading={item.heading}
                                para={item.para}
                              />
                            )))
                                }
                                {astro &&  (AstrologyData.map((item) => (
                              <FaqItem
                                heading={item.heading}
                                para={item.para}
                              />
                            )))
                                }
                                {policy &&  (PolicyData.map((item) => (
                              <FaqItem
                                heading={item.heading}
                                para={item.para}
                              />
                            )))
                                }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
