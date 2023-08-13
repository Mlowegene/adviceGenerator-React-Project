import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "../images/pattern-divider-desktop.svg";
import ButtonImage from "../images/icon-dice.svg";
import "./advaceGenerator.css";

function AdviceGenerator() {
  const [showMessage, setShowMessage] = useState("");

  const fetchNewAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setShowMessage(data.slip);
        console.log(data.slip);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  useEffect(() => {
    fetchNewAdvice();
  }, []);

  return (
    <div
      className="d-flex flex-column align-items-center rounded-4 shadow"
      style={{
        width: "500px",
        position: "relative",
        backgroundColor: "hsl(217, 19%, 24%)",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <h5 className="pt-5 pb-3 fs-6 " style={{ color: "hsl(150, 100%, 66%)" }}>
        {`ADVICE #${showMessage.id}`}
      </h5>
      <p
        className="fs-4 text-center pb-20"
        style={{ color: "hsl(193, 38%, 86%)", width: "450px" }}
      >
        {showMessage.advice}
      </p>

      <div className=" my-5 ">
        <img src={Image} alt="divider" className="pb-3" />
      </div>

      <button
        className="border-none rounded-circle cursor-pointer "
        style={{
          backgroundColor: "hsl(150, 100%, 66%)",
          width: "60px",
          height: "60px",
          border: "none",
          position: "absolute",
          bottom: "-25px",
          left: "220px",
        }}
        onClick={fetchNewAdvice}
      >
        <img src={ButtonImage} alt="buttonImage" />
      </button>
    </div>
  );
}

export default AdviceGenerator;
