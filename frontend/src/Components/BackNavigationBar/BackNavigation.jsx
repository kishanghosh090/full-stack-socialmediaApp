import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function BackNavigation() {
  const navigator = useNavigate();
  const goBack = () => {
    navigator(-1);
  };
  return (
    <div
      className="absolute top-0 left-0 bg-slate-100 flex justify-start px-5 py-4 text-black cursor-pointer w-full z-50"
      onClick={goBack}
      id="back"
    >
      <span>
        <FaArrowLeft />
      </span>
    </div>
  );
}

export default BackNavigation;
