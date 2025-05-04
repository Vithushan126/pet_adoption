import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  FileText,
  SquareDashedMousePointer,
  Users,
  Blocks,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("dashboard");
  const [sideBarInc, setSideBarInc] = useState(true);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Blocks />,
      path: "/admin",
    },
  ];

  return (
    <div
      className={`${
        sideBarInc ? "w-64" : "w-12"
      } h-screen hidden  text-text-color overflow-auto transition-all duration-300 border-r-2 border-dashed border-borderGray300 bg-white md:flex flex-col`}
    >
      <div
        className="flex items-center justify-end cursor-pointer mt-4"
        onClick={() => setSideBarInc((prev) => !prev)}
      >
        {React.createElement(sideBarInc ? ChevronLeft : ChevronRight, {
          size: 24,
          className:
            "bg-white rounded-full text-black border-2 border-borderGray300 -mr-0 transform transition-transform duration-200 hover:scale-120",
        })}
      </div>
      <div className="p-4">
        <div className="flex flex-col space-y-2 mt-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center cursor-pointer py-2 pl-4 rounded-xl ${
                activeItem === item.id
                  ? "text-main-color bg-blue-100"
                  : "text-text-color "
              }`}
              onClick={() => {
                setActiveItem(item.id);
                navigate(item.path);
              }}
            >
              <div className="mr-3">{item.icon}</div>
              <span className="text-lg">{item.label}</span>
              {/* {item.hasDropdown && <ChevronDown className="ml-auto" size={16} />} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
