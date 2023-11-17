import "./styles.css";
import React, { useState } from "react";
import HeroSlider, { Slide } from "hero-slider";

const ListingAd = ({
  pic,
  title,
  address,
  project_type,
  year,
  ownership_type,
  psf_min,
  psf_max,
  subprice_label,
  availabilities_label,
  description,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showOriginalNumber, setShowOriginalNumber] = useState(false);

  const price = `$${psf_min.toLocaleString()} - $${psf_max.toLocaleString()} psf`;
  const info1 = `${project_type} · ${year} · ${ownership_type}`;

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const formatPhoneNumber = (text) => {
    const phoneNumberRegex = /(\d{4}\s?\d{4})/; // Assuming the phone number format is XXXX XXXX or XXXXXXXX
    const match = text.match(phoneNumberRegex);
    if (match) {
      const formattedNumber = match[0].replace(/\d{4}$/, "XXXX");
      return text.replace(phoneNumberRegex, formattedNumber);
    }
    return text;
  };

  const toggleOriginalNumber = () => {
    setShowOriginalNumber(!showOriginalNumber);
  };

  const formattedPhoneNumber = formatPhoneNumber(description);
  const displayPhoneNumber = showOriginalNumber
    ? description
    : formattedPhoneNumber;

  return (
    <div className="App">
      <HeroSlider
        height
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSLide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0, 0, 0.33)",
        }}
      >
        <img className="mainPic" src={pic} />
      </HeroSlider>

      <i></i>
      <span className="ribbon">LAUNCHING SOON</span>

      <div className="mainContent">
        <object className="icon" />

        <div className="container-1">
          <h1>{title}</h1>
          <p className="address">{address}</p>
        </div>

        <div className="container-2">
          <p className="price">{price}</p>
          <p className="subprice">{subprice_label}</p>
        </div>

        <div className="container-3">
          <h4 className="info-1">{info1}</h4>
          <h4 className="info-2">{availabilities_label}</h4>
        </div>

        <div className="container-4">
          <button className="btn" onClick={toggleDescription}>
            See Description
          </button>
          {showDescription && (
            <p className="desc" onClick={toggleOriginalNumber}>
              {displayPhoneNumber.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingAd;
