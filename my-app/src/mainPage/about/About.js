import React from "react";
import "./About.css";
import Navbar from "../navbar/Navbar";
import Footer from "../mixed/Footer";
import Rating from "../rating/Ratings";
import path1 from "../horo-images/about.jpg";
import FAQ from "../FAQ/Faq"
import FooterBarrier from "../footer/footerBarrier";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-us-page-main">
        <div className="about-us-page">
          <section className="introduction">
            <h1>Welcome to Astrology World</h1>
            <p>
            The world of astrology is a captivating realm where the celestial and human spheres converge. It's a discipline steeped in ancient wisdom, where the positions of stars, planets, and cosmic energies are interpreted to understand and forecast individual destinies. From providing insights into personality traits to guiding life's decisions, astrology offers a lens through which we explore the intricate interplay between celestial bodies and human existence. It's a rich tapestry of beliefs and practices that transcends cultures and time, offering a profound glimpse into the cosmic symphony that influences our lives
            </p>
          </section>

          <div className="about-us-heading-2">
            {" "}
            <h1>ABOUT US</h1>
          </div>
          <section className="brand-story">
            <div className="about-us-page-image1">
              <img className="about-us-page-image1-img" alt="" src={path1} />
            </div>
            <div className="about-us-page-paragraph">
              <h2>Our Motto</h2>
              <p>
                At [Your Website Name], we delve into the boundless universe to
                unravel the celestial map that guides your life’s journey. Our
                mission is to illuminate the pathways of the cosmos and empower
                you to navigate life’s complexities with clarity and purpose.{" "}
              </p>
              <p>
                We believe that within the stars lies an intricate tapestry of
                energies that shape our individual destinies. Our dedicated team
                of astrologers, each a maestro in their celestial craft,
                harnesses ancient wisdom and modern insights to decode the
                language of the heavens.{" "}
              </p>

              <p>
                Join us at [Your Website Name] and embark on a transformative
                odyssey. Let us unravel the mysteries of the universe together,
                as we embrace the cosmic dance and discover the profound beauty
                of our interconnected destinies."
              </p>
            </div>
          </section>

          <section className="brand-story">
            
            <div className="about-us-page-paragraph">
              <h2>Why Dr. Anoop Pandit ?</h2>
              <p>
                At [Your Website Name], we delve into the boundless universe to
                unravel the celestial map that guides your life’s journey. Our
                mission is to illuminate the pathways of the cosmos and empower
                you to navigate life’s complexities with clarity and purpose.{" "}
              </p>
              <p>
                We believe that within the stars lies an intricate tapestry of
                energies that shape our individual destinies. Our dedicated team
                of astrologers, each a maestro in their celestial craft,
                harnesses ancient wisdom and modern insights to decode the
                language of the heavens.{" "}
              </p>

              <p>
                Join us at [Your Website Name] and embark on a transformative
                odyssey. Let us unravel the mysteries of the universe together,
                as we embrace the cosmic dance and discover the profound beauty
                of our interconnected destinies."
              </p>
            </div>
            <div className="about-us-page-image1">
              <img className="about-us-page-image1-img" alt="" src={path1} />
            </div>
          </section>
        </div>
      </div>



      <Rating />
      <FAQ/>
      <FooterBarrier/>
      <Footer />
    </>
  );
}
