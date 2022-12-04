import React from "react";
import "D:/MyCode/proje/src/style/Slider.css";
import leftArrow from "./icons/left-arrow.svg";
import RightArrow from "./icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? RightArrow : leftArrow} />
    </button>
  );
}
