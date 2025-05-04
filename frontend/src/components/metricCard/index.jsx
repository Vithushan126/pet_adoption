import React from "react";

export const MetricCard = ({
  count,
  label,
  icon,
  subIcon,
  timeFrame = "Today",
}) => {
  return (
    <div className="rounded-lg shadow-sm p-2 pt-0 flex flex-col w-full space-y-1 border border-borderGray300 hover:shadow-md transition-all duration-300 ease-in-out">
      <div className="text-text-gray text-6xl font-medium w-full flex  justify-center items-start">
        {count}
      </div>

      <div className="flex flex-row items-start justify-start space-x-2">
        {subIcon && <span className="text-textGray">{subIcon}</span>}
        <span className="text-textGray font-semibold">{timeFrame}</span>
      </div>
      <div className="flex flex-row items-start justify-start space-x-2">
        {icon && <span className="">{icon}</span>}
        <span className="text-black-text font-semibold">{label}</span>
      </div>
    </div>
  );
};
