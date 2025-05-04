import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-text-color">{title}</h1>
      <div className="h-1 bg-blue-500 w-3/4 mt-1" />
    </div>
  );
};

export default PageTitle;
