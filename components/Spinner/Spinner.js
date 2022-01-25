import React from "react";
import Lottie from "react-lottie";
import SpinnerAnimation from "./spinner.json";

const defatulOptions = {
  autoplay: true,
  loop: true,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
  animationData: SpinnerAnimation,
};

const Spinner = ({ height, width, classes }) => {
  return (
    <div className={`grid place-content-center ${classes}`}>
      <Lottie options={defatulOptions} height={height} width={width} />
    </div>
  );
};

export default Spinner;
