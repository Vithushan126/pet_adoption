import React, { useState } from "react";
import {
  Calendar,
  ChartNoAxesColumn,
  Frown,
  HeartHandshake,
  PawPrint,
  Plus,
  Smile,
  UserCog,
  Users,
  UserX,
} from "lucide-react";

import PageTitle from "../../components/pageTitle";
import { MetricCard } from "../../components/metricCard";
import PetDetails from "./PetDetails";

const metricData = [
  {
    count: "08",
    label: "Total Adopted Pets",
    icon: <HeartHandshake className="text-pink-500" />,
    supIcon: <Calendar />,
    timeFrame: "Total",
    bgColor: "bg-green-200/50",
  },
  {
    count: "06",
    label: "Happy Pets",
    icon: <Smile className="text-yellow-500" />,
    supIcon: <Calendar />,
    timeFrame: "Total",
    bgColor: "bg-blue-200/50",
  },
  {
    count: "10",
    label: "Sad Pets",
    icon: <Frown className="text-blue-500" />,
    supIcon: <ChartNoAxesColumn />,
    timeFrame: "Total",
    bgColor: "bg-orange-200/50",
  },
  {
    count: "10",
    label: "Existing Pets",
    icon: <PawPrint className="text-green-600" />,
    supIcon: <ChartNoAxesColumn />,
    timeFrame: "Total",
    bgColor: "bg-red-200/50",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-full space-y-12">
      <div className="flex flex-row w-full justify-start items-center ">
        <div className="flex w-fit">
          <PageTitle title="Dashboard" />
        </div>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricData.map((item, index) => (
          <MetricCard
            key={index}
            count={item.count}
            label={item.label}
            icon={item.icon}
            subIcon={item.supIcon}
            timeFrame={item.timeFrame}
            bgColor={item.bgColor}
          />
        ))}
      </div>

      {/* pet detaails */}
      <PetDetails />
    </div>
  );
};

export default Dashboard;
