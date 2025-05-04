import axios from "axios";

export const APIUser = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//get all pets
export const GetAllPets = () => {
  return APIUser.get("/pets");
};

//Create a pet
export const AddPets = (formvalues) => {
  return APIUser.post("pets", formvalues);
};

//Update a pet
export const UpdatePetsById = (petsId, formvalues) => {
  return APIUser.put(`pets/${petsId}`, formvalues);
};

//delete a pet
export const DeletePetsById = (petsId) => {
  return APIUser.delete(`pets/${petsId}`);
};

//filter pets by moods
export const FilterPetsByMood = (mood) => {
  console.log("mood", mood);

  return APIUser.get(
    `/pets/filter?mood=${encodeURIComponent(JSON.stringify(mood))}`
  );
};
