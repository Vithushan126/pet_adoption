import React, { useEffect, useState } from "react";
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
} from "../../redux/features/petDetailsSlice";

const headers = [
  { icon: <ShieldCheck size={20} />, label: "ID" },
  { icon: <User size={20} />, label: "Name" },
  { icon: <Dog size={20} />, label: "Species" },
  { icon: <CakeSlice size={20} />, label: "Age" },
  { icon: <Smile size={20} />, label: "Personality" },
  { icon: <Heart size={20} />, label: "Mood" },
  { icon: <Home size={20} />, label: "Adopted" },
  { icon: <CalendarCheck size={20} />, label: "Adoption Date" },
  { icon: <FileText size={20} />, label: "PDF" },
  { icon: <MoreVertical size={20} />, label: "Action" },
];

const PetDetails = () => {
  const dispatch = useDispatch();
  const { petDetails, loading, error, message } = useSelector(
    (state) => state.petDetails
  );

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const adopter = {
    name: "Vairamuththu Vithushan",
    email: "vairamuththu@example.com",
  };

  useEffect(() => {
    dispatch(GetAllPets());
  }, [dispatch]);

  const handleProfileSubmit = async (values) => {
    if (editData) {
      console.log("Updated profile:", values);
      try {
        await dispatch(UpdatePetsById(values));
        dispatch(GetAllPets());
      } catch (error) {
        console.error("Error updating pets:", error);
      }
    } else {
      try {
        await dispatch(AddPets(values));
        dispatch(GetAllPets());
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
      await dispatch(GetAllPets());
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
        <table className="min-w-full ">
          <thead>
            <tr className="text-left text-black-text bg-gradient-to-r from-orange-100 to-pink-100">
              {headers.map((h, i) => (
                <th key={i} className="py-3 font-normal">
                  <div className="flex items-center gap-2 font-semibold text-nowrap">
                    {/* {h.icon} */}
                    {h.label}
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
                      <CheckCircle className="w-4 h-4 animate-bounce" />
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
