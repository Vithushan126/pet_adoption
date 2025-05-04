import React, { useState } from "react";
import {
  Calendar,
  ChartNoAxesColumn,
  Plus,
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
    label: "Visitors Expected",
    icon: <Users />,
    supIcon: <Calendar />,
    timeFrame: "Today",
  },
  {
    count: "06",
    label: "Completed Meetings",
    icon: <Users />,
    supIcon: <Calendar />,
    timeFrame: "Today",
  },
  {
    count: "10",
    label: "Defaulted Visitors",
    icon: <UserX />,
    supIcon: <ChartNoAxesColumn />,
    timeFrame: "Total",
  },
  {
    count: "10",
    label: "Pending Visits",
    icon: <UserCog />,
    supIcon: <ChartNoAxesColumn />,
    timeFrame: "Total",
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
          />
        ))}
      </div>

      {/* pet detaails */}
      <PetDetails />
    </div>
  );
};

export default Dashboard;
