import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Edit,
  Eye,
  Trash2,
  FileText,
  SquarePlus,
  Squirrel,
  ShieldCheck,
  User,
  Dog,
  CakeSlice,
  Smile,
  Heart,
  Home,
  CalendarCheck,
  MoreVertical,
  BadgeCheck,
  FunnelPlus,
  XCircle,
} from "lucide-react";
import Button from "../../components/button";
import PetsForm from "./PetsForm";
import { generateAdoptionCertificate } from "../../utils/generateAdoptionCertificate";
import { getMoodColor, getMoodIcon } from "../../utils/moodHelpers";
import {
  AddPets,
  UpdatePetsById,
  DeletePetsById,
  FilterPetsByMood,
} from "../../redux/features/petDetailsSlice";
import { formatDate } from "../../utils/formatDate";

const moodOptions = ["Happy", "Sad", "Excited"];
const adopter = {
  name: "Vairamuththu Vithushan",
  email: "vairamuththu@example.com",
};

const PetDetails = () => {
  const dispatch = useDispatch();
  const { petDetails } = useSelector((state) => state.petDetails);
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const filterRef = useRef();

  useEffect(() => {
    const outsideClick = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", outsideClick);
    return () => document.removeEventListener("mousedown", outsideClick);
  }, []);

  useEffect(() => {
    dispatch(FilterPetsByMood(selectedMoods));
  }, [selectedMoods]);

  const handleSubmit = async (values) => {
    const action = editData ? UpdatePetsById : AddPets;
    await dispatch(action(values));
    dispatch(FilterPetsByMood(selectedMoods));
    setEditData(null);
  };

  const handleDelete = async (id) => {
    setDeletingId(id);
    setTimeout(async () => {
      await dispatch(DeletePetsById(id));
      dispatch(FilterPetsByMood(selectedMoods));
      setDeletingId(null);
    }, 300); // fade-out duration
  };

  const headers = [
    { icon: <ShieldCheck />, label: "ID" },
    { icon: <User />, label: "Name" },
    { icon: <Dog />, label: "Species" },
    { icon: <CakeSlice />, label: "Age" },
    { icon: <Smile />, label: "Personality" },
    {
      icon: <Heart />,
      label: "Mood",
      filter: (
        <div className="relative" ref={filterRef}>
          <FunnelPlus
            onClick={() => setFilterOpen(!filterOpen)}
            className="cursor-pointer text-gray-500 hover:text-main-color"
          />
          {filterOpen && (
            <div className="absolute mt-2 bg-white border shadow p-2 z-50 rounded w-40">
              {moodOptions.map((mood) => (
                <label key={mood} className="flex items-center space-x-2 p-1">
                  <input
                    type="checkbox"
                    checked={selectedMoods.includes(mood)}
                    onChange={() =>
                      setSelectedMoods((prev) =>
                        prev.includes(mood)
                          ? prev.filter((m) => m !== mood)
                          : [...prev, mood]
                      )
                    }
                  />
                  <span>{mood}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ),
    },
    { icon: <Home />, label: "Adopted" },
    { icon: <CalendarCheck />, label: "Adoption Date" },
    { icon: <FileText />, label: "PDF" },
    { icon: <MoreVertical />, label: "Action" },
  ];

  return (
    <div className="rounded-2xl shadow-sm p-4 space-y-4 w-full">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Squirrel className="text-orange" size={30} />
          <h2 className="text-2xl font-semibold text-black-text">
            Pets Details
          </h2>
        </div>
        <Button
          onClick={() => setModalOpen(true)}
          className="bg-button-color text-white px-6 py-2 rounded hover:bg-hover-color flex items-center gap-2"
        >
          <SquarePlus className="w-4 h-4" /> Create Pets
        </Button>
      </div>

      <div className="overflow-x-auto border border-borderGray300 rounded-lg shadow-sm">
        <table className="min-w-full text-sm min-h-[200px]">
          <thead className="bg-gradient-to-r from-orange-100 to-pink-100 text-left ">
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="py-3 font-semibold">
                  <div className="flex items-center gap-2 text-nowrap">
                    {h.label} {h.filter}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {petDetails?.map((pet) => (
              <tr
                key={pet._id}
                className={`border-t border-gray-100 transition-opacity duration-300 ${
                  deletingId === pet._id ? "opacity-0" : "opacity-100"
                }`}
              >
                <td className="py-3">{pet._id}</td>
                <td className="py-3 font-medium">{pet.name}</td>
                <td className="py-3">{pet.species}</td>
                <td className="py-3">{pet.age}</td>
                <td className="py-3">{pet.personality}</td>
                <td className="py-3">
                  <span
                    className={`flex items-center gap-2 text-nowrap text-white rounded-2xl p-1 ${getMoodColor(
                      pet.mood
                    )}`}
                  >
                    {getMoodIcon(pet.mood)} {pet.mood}
                  </span>
                </td>
                <td className="py-3">
                  <div
                    className={`flex items-center gap-2 px-2 py-1 rounded-full w-fit text-sm font-medium text-nowrap
                    ${
                      pet.adopted
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {pet.adopted ? (
                      <BadgeCheck className="w-4 h-4" />
                    ) : (
                      <XCircle className="w-4 h-4" />
                    )}
                    {pet.adopted ? "Adopted" : "Not Adopted"}
                  </div>
                </td>
                <td className="py-3 text-nowrap">
                  {formatDate(pet?.adoption_date) || "-"}
                </td>
                <td className="py-3 text-center">
                  {pet.adopted ? (
                    <FileText
                      className="text-blue-600 cursor-pointer hover:scale-110 transition-transform"
                      onClick={() => generateAdoptionCertificate(pet, adopter)}
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td className="py-3 flex gap-1 md:gap-4 justify-center items-end">
                  <Edit
                    onClick={() => {
                      setEditData(pet);
                      setModalOpen(true);
                    }}
                    className="cursor-pointer hover:text-button-color"
                  />
                  <Eye
                    onClick={() => {
                      setEditData(pet);
                      setModalOpen(true);
                    }}
                    className="cursor-pointer hover:text-button-color"
                  />
                  <Trash2
                    onClick={() => handleDelete(pet._id)}
                    className="cursor-pointer text-red hover:text-orange"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PetsForm
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditData(null);
        }}
        onSubmit={handleSubmit}
        initialData={editData}
      />
    </div>
  );
};

export default PetDetails;
