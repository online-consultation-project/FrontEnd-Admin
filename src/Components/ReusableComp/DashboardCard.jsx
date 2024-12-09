import React from "react";

const DashboardCard = ({ props }) => {
  const { img: Img, title, count, date, color } = props || {};

  //    console.log(Img);

  return (
    <div
      className={`h-[120px] rounded-lg bg-white shadow-sm shadow-slate-600 flex gap-6 justify-evenly border-t-4 border-${color}  max-sm:gap-11 items-center`}
    >
      <Img className={`w-12 h-12 text-blue-900`} />
      <div className={`flex flex-col justify-center gap-1 items-center`}>
        <h2
          className={`text-[1.3em] font-semibold text-black text-opacity-75`}
        >
          {title}
        </h2>
        <span className={`text-2xl font-bold text-blue-900`}>
          {count}
        </span>
        <span className="text-[0.9em] text-green-600">{date}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
