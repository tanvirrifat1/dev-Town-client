import React from "react";
import img6 from "../../../assets/assets/cover1.jpg";
import img from "../../../assets/assets/cover3.jpg";
import img1 from "../../../assets/assets/cover/cover1.png";
import "./Banner.css";
import HelpLine from "./HelpLine";
import { Carousel } from "@material-tailwind/react";

const Banner = () => {
  const myStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    height: "800px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <Carousel transition={{ duration: 2 }} className="">
        <img
          src={img6}
          alt="image 1"
          className="h-[700px] w-full object-cover"
        />
        <img
          src={img1}
          alt="image 2"
          className="h-[700px] w-full object-cover"
        />
        <img
          src={img}
          alt="image 3"
          className="h-[700px] w-full object-cover"
        />
      </Carousel>

      <HelpLine />
    </div>
  );
};

export default Banner;
