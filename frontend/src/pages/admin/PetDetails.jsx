import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CalendarPlus,
  ChartLine,
  Edit,
  Mail,
  ShieldCheck,
  SquarePlus,
  Squirrel,
  User,
  Dog,
  CakeSlice,
  UserRound,
  Smile,
  Heart,
  Home,
  CalendarCheck,
  FileText,
  MoreVertical,
  CheckCircle,
  XCircle,
  Delete,
  Trash2,
  View,
  Eye,
  BadgeCheck,
  FunnelPlus,
} from "lucide-react";
import Button from "../../components/button";
import PetsForm from "./PetsForm";
import { generateAdoptionCertificate } from "../../utils/generateAdoptionCertificate";
import { getMoodColor, getMoodIcon } from "../../utils/moodHelpers";
import {
  AddPets,
  UpdatePetsById,
  GetAllPets,
  DeletePetsById,
  FilterPetsByMood,
} from "../../redux/features/petDetailsSlice";

const moodOptions = ["Happy", "Sad", "Excited"];

const PetDetails = () => {
  const dispatch = useDispatch();
  const moodFilterRef = useRef(null);
  const { petDetails, loading, error, message } = useSelector(
    (state) => state.petDetails
  );

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [moodFilterOpen, setMoodFilterOpen] = useState(false);
  const [selectedMoods, setSelectedMoods] = useState([]);
  console.log("selectedMoods", selectedMoods);

  const headers = [
    { icon: <ShieldCheck size={20} />, label: "ID" },
    { icon: <User size={20} />, label: "Name" },
    { icon: <Dog size={20} />, label: "Species" },
    { icon: <CakeSlice size={20} />, label: "Age" },
    { icon: <Smile size={20} />, label: "Personality" },
    {
      icon: <Heart size={20} />,
      label: "Mood",
      filter: (
        <div className="relative">
          <FunnelPlus
            size={16}
            className="text-gray-500 hover:text-main-color transition-all duration-300 cursor-pointer hover:scale-125"
            onClick={() => setMoodFilterOpen((prev) => !prev)}
          />
          {moodFilterOpen && (
            <div
              ref={moodFilterRef}
              className="absolute z-50 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg p-2"
            >
              {moodOptions.map((mood) => (
                <label
                  key={mood}
                  className="flex items-center space-x-2 p-1 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedMoods.includes(mood)}
                    onChange={() => {
                      setSelectedMoods((prev) =>
                        prev.includes(mood)
                          ? prev.filter((m) => m !== mood)
                          : [...prev, mood]
                      );
                    }}
                  />
                  <span>{mood}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ),
    },
    { icon: <Home size={20} />, label: "Adopted" },
    { icon: <CalendarCheck size={20} />, label: "Adoption Date" },
    { icon: <FileText size={20} />, label: "PDF" },
    { icon: <MoreVertical size={20} />, label: "Action" },
  ];

  const adopter = {
    name: "Vairamuththu Vithushan",
    email: "vairamuththu@example.com",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        moodFilterRef.current &&
        !moodFilterRef.current.contains(event.target)
      ) {
        setMoodFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    dispatch(FilterPetsByMood(selectedMoods));
  }, [selectedMoods]);

  const handleProfileSubmit = async (values) => {
    if (editData) {
      try {
        await dispatch(UpdatePetsById(values));
        dispatch(FilterPetsByMood(selectedMoods));
      } catch (error) {
        console.error("Error updating pets:", error);
      }
    } else {
      try {
        await dispatch(AddPets(values));
        dispatch(FilterPetsByMood(selectedMoods));
      } catch (error) {
        console.error("Error creating pets:", error);
      }
    }
    setEditData(null);
  };

  const handleEditClick = (pet) => {
    setEditData(pet);
    setIsProfileModalOpen(true);
  };

  const handleViewClick = (pet) => {
    setEditData(pet);
    setIsProfileModalOpen(true);
  };

  const handleDeleteClick = async (pet) => {
    try {
      await dispatch(DeletePetsById(pet._id));
      dispatch(FilterPetsByMood(selectedMoods));
    } catch (error) {
      console.error("Failed to delete pet:", error);
    }
  };

  return (
    <div className="rounded-2xl shadow-sm p-4 flex flex-col w-full space-y-4 h-full">
      <div className="flex justify-between ">
        <div className="flex space-x-4">
          <Squirrel className="text-orange" size={30} />
          <span className="text-text-black-text font-semibold text-2xl">
            Pets Details
          </span>
        </div>
        <Button
          className="text-white bg-button-color font-bold border  rounded-md hover:bg-hover-color hover:text-white transition-all duration-300 ease-in-out flex items-center gap-2 text-nowrap w-fit px-2 md:px-16"
          Visitation
          onClick={() => setIsProfileModalOpen(true)}
        >
          <SquarePlus className="text-white w-4 h-4" />
          Create Pets
        </Button>
      </div>

      {/* table */}
      <div className="overflow-x-auto rounded-lg shadow-sm border border-borderGray300 ">
        <table className="min-w-full min-h-[200px]">
          <thead>
            <tr className="text-left text-black-text bg-gradient-to-r from-orange-100 to-pink-100">
              {headers.map((h, i) => (
                <th key={i} className="py-3 font-normal">
                  <div className="flex items-center gap-2 font-semibold text-nowrap">
                    {h.label}
                    {h.filter}
                  </div>
                </th>
              ))}
              <th className="py-3 font-normal" />
            </tr>
          </thead>

          <tbody>
            {petDetails?.map((pet) => (
              <tr key={pet?._id} className="border-t border-gray-100 text-sm">
                <td className="py-3 text-text-gray">{pet?._id}</td>
                <td className="py-3 font-medium text-black-text">
                  {pet?.name}
                </td>
                <td className="py-3 text-text-gray">{pet?.species}</td>
                <td className="py-3 text-text-gray text-nowrap">{pet?.age}</td>
                <td className="py-3 text-text-gray">{pet?.personality}</td>
                <td className="py-3">
                  <span
                    className={`font-semibold flex items-center gap-2 text-white rounded-2xl p-1 text-nowrap ${getMoodColor(
                      pet?.mood
                    )}`}
                  >
                    {getMoodIcon(pet?.mood)} {pet?.mood}
                  </span>
                </td>

                <td className="py-3">
                  <div
                    className={`flex items-center gap-2 px-2 py-1 rounded-full w-fit transition-all duration-500 ease-in-out animate-fade-in text-nowrap ${
                      pet?.adopted === true
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {pet.adopted === true ? (
                      <BadgeCheck className="w-4 h-4 animate-bounce" />
                    ) : (
                      <XCircle className="w-4 h-4 animate-pulse" />
                    )}
                    <span className="text-sm font-medium">
                      {pet?.adopted === true ? "Adopted" : "Not Adopted"}
                    </span>
                  </div>
                </td>
                <td className="py-3 text-text-gray">
                  {pet?.adoption_date ? pet?.adoption_date : "-"}
                </td>
                <td className="py-3 text-center ">
                  {pet?.adopted === true ? (
                    <FileText
                      className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300 group-hover:scale-110 cursor-pointer"
                      onClick={() => generateAdoptionCertificate(pet, adopter)}
                    />
                  ) : (
                    <div className="text-gray-400 text-start">-</div>
                  )}
                </td>

                <td className="py-3 flex flex-row justify-evenly">
                  <Edit
                    className="w-5 h-5 text-text-gray inline-block hover:cursor-pointer hover:text-button-color transition-transform duration-200 hover:scale-110"
                    onClick={() => handleEditClick(pet)}
                  />
                  <Eye
                    className="w-5 h-5 text-text-gray inline-block hover:cursor-pointer hover:text-button-color transition-transform duration-200 hover:scale-110"
                    onClick={() => handleViewClick(pet)}
                  />
                  <Trash2
                    className="w-5 h-5 text-red inline-block hover:cursor-pointer hover:text-orange transition-transform duration-200 hover:scale-110"
                    onClick={() => handleDeleteClick(pet)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PetsForm
        isOpen={isProfileModalOpen}
        onClose={() => {
          setIsProfileModalOpen(false);
          setEditData(null);
        }}
        onSubmit={handleProfileSubmit}
        initialData={editData}
      />
    </div>
  );
};

export default PetDetails;
