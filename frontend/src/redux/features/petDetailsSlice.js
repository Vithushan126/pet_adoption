import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//get all pets
export const GetAllPets = createAsyncThunk(
  "GetAllPets",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.GetAllPets();
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Create a pet
export const AddPets = createAsyncThunk(
  "AddPets",
  async (formvalues, { rejectWithValue }) => {
    try {
      const response = await API.AddPets(formvalues);
      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.response.data.message,
        detail: error.response.data.error,
      });
    }
  }
);

// Update a pet
export const UpdatePetsById = createAsyncThunk(
  "UpdatePetsById",
  async (formvalues, { rejectWithValue }) => {
    try {
      const response = await API.UpdatePetsById(formvalues._id, formvalues);
      console.log("response", response);
      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.response.data.message,
        detail: error.response.data.error,
      });
    }
  }
);

// Delete a pet
export const DeletePetsById = createAsyncThunk(
  "DeletePetsById",
  async (petsId, { rejectWithValue }) => {
    try {
      const response = await API.DeletePetsById(petsId);
      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.response.data.message,
        detail: error.response.data.error,
      });
    }
  }
);

// Filter pets by moods
export const FilterPetsByMood = createAsyncThunk(
  "FilterPetsByMood",
  async (mood, { rejectWithValue }) => {
    console.log("mood", mood);

    try {
      const response = await API.FilterPetsByMood(mood);
      console.log("response", response);

      return response;
    } catch (error) {
      return rejectWithValue({
        message: error.response.data.message,
        detail: error.response.data.error,
      });
    }
  }
);

const initialState = {
  petDetails: null,
  loading: false,
  error: { message: null, detail: null },
  message: null,
};

const petDetailsSlice = createSlice({
  name: "petDetails",
  initialState,
  extraReducers: (builder) => {
    builder
      // Get all pets
      .addCase(GetAllPets.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetAllPets.fulfilled, (state, action) => {
        state.loading = false;
        state.petDetails = action.payload.data.data;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(GetAllPets.rejected, (state, action) => {
        state.loading = false;
        state.error.all = action.payload;
      })

      // Add a pet
      .addCase(AddPets.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = { message: null, detail: null };
      })
      .addCase(AddPets.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.data.message;
        state.error = { message: null, detail: null };
        toast.success(action.payload.data.message);
      })
      .addCase(AddPets.rejected, (state, action) => {
        state.loading = false;
        state.error.message = action.payload.message;
        state.error.detail = action.payload.detail;
        toast.error(action.payload.detail);
      })

      // Update a pet
      .addCase(UpdatePetsById.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = { message: null, detail: null };
      })
      .addCase(UpdatePetsById.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.data.message;
        state.error = { message: null, detail: null };
        toast.success(action.payload.data.message);
      })
      .addCase(UpdatePetsById.rejected, (state, action) => {
        state.loading = false;
        state.error.message = action.payload.message;
        state.error.detail = action.payload.detail;
        toast.error(action.payload.detail);
      })

      // Delete a pet
      .addCase(DeletePetsById.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = { message: null, detail: null };
      })
      .addCase(DeletePetsById.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.data.message;
        state.error = { message: null, detail: null };
        toast.success(action.payload.data.message);
      })
      .addCase(DeletePetsById.rejected, (state, action) => {
        state.loading = false;
        state.error.message = action.payload.message;
        state.error.detail = action.payload.detail;
        toast.error(action.payload.detail);
      })

      // Filter pets by moods
      .addCase(FilterPetsByMood.pending, (state) => {
        state.loading = true;
        state.message = null;
        state.error = { message: null, detail: null };
      })
      .addCase(FilterPetsByMood.fulfilled, (state, action) => {
        state.loading = false;
        state.petDetails = action.payload.data.data;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(FilterPetsByMood.rejected, (state, action) => {
        state.loading = false;
        state.error.message = action.payload.message;
        state.error.detail = action.payload.detail;
      });
  },
});

export default petDetailsSlice.reducer;
