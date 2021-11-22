import React from "react";
import PowersLap from "../../../assest/img/large_2x.mp4";
import "./Video.css";
import { Link } from "react-router-dom";
const Video = () => {
  return (
    <>
      <video autoPlay loop muted className="video">
        <source className="mp" src={PowersLap} type="video/mp4" />
      </video>
      <div className="learn">
        <h2>
          Sand<label>Box</label>
        </h2>
        <Link to="/product/4">
          <button>Buy now</button>
        </Link>
      </div>
    </>
  );
};

export default Video;
