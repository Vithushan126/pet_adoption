import { Calendar, X, PawPrint, Hash, Smile } from "lucide-react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../components/button";

const profileValidationSchema = Yup.object().shape({
  name: Yup.string().required("Pet Name is required"),
  species: Yup.string().required("species is required"),
  age: Yup.number()
    .typeError("Age must be a number")
    .required("Age is required")
    .integer("Age must be an integer")
    .min(0, "Age must be at least 0")
    .max(100, "Age must be 100 or less"),
  personality: Yup.string()
    .required("Personality is required")
    .min(3, "Too short – describe at least 3 characters"),
  // mood: Yup.string()
  //   .required("Mood is required")
  //   .min(3, "Mood must have at least 3 characters"),
});

const PetsForm = ({ isOpen, onClose, onSubmit, initialData }) => {
  console.log("initialData", initialData);

  const initialValues = {
    name: "",
    species: "",
    age: "",
    personality: "",
    // mood: "",
    ...initialData,
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 p-2">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[95vh] overflow-y-scroll">
        <div className="p-4 flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-text-color">
              {initialData ? "Update Pet" : "Create Pet"}
            </h2>
            <button
              onClick={onClose}
              className="text-black-text cursor-pointer hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={profileValidationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              onSubmit(values);
              setSubmitting(false);
              resetForm();
              onClose();
            }}
          >
            {({ values, errors, touched, isSubmitting, setFieldValue }) => (
              <Form className="space-y-4 ">
                {/* Pets Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="">
                      Pet Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <PawPrint size={18} className="text-text-gray" />
                      </div>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="pl-10 w-full border rounded-md py-2 px-3 text-black-text focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                        placeholder="e.g., Bella"
                      />
                    </div>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="species" className="">
                      Species
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Hash size={18} className="text-text-gray" />
                      </div>
                      <Field
                        type="text"
                        name="species"
                        id="species"
                        className="pl-10 w-full border rounded-md py-2 px-3 text-black-text focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                        placeholder="e.g., Dog, Cat, Rabbit"
                      />
                    </div>
                    <ErrorMessage
                      name="species"
                      component="div"
                      className="text-red text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="age" className="">
                      Age
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar size={18} className="text-text-gray" />
                      </div>
                      <Field
                        type="number"
                        name="age"
                        id="age"
                        className="pl-10 w-full border rounded-md py-2 px-3 text-black-text focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                        placeholder="e.g., 3"
                      />
                    </div>
                    <ErrorMessage
                      name="age"
                      component="div"
                      className="text-red text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="personality" className="">
                      Personality
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Smile size={18} className="text-text-gray" />
                      </div>
                      <Field
                        type="text"
                        name="personality"
                        id="personality"
                        className="pl-10 w-full border rounded-md py-2 px-3 text-black-text focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                        placeholder="e.g., Playful, Calm, Friendly"
                      />
                    </div>
                    <ErrorMessage
                      name="personality"
                      component="div"
                      className="text-red text-sm mt-1"
                    />
                  </div>

                  {/* <div>
                    <label htmlFor="mood" className="">
                      Mood
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <EmojiSmile size={18} className="text-text-gray" />
                      </div>
                      <Field
                        as="select"
                        name="mood"
                        id="mood"
                        className="pl-10 w-full border rounded-md py-2 px-3 text-black-text focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                      >
                        <option value="" label="Select Mood" />
                        <option value="Happy">Happy</option>
                        <option value="Excited">Excited</option>
                        <option value="Sad">Sad</option>
                      </Field>
                    </div>
                    <ErrorMessage
                      name="mood"
                      component="div"
                      className="text-red text-sm mt-1"
                    />
                  </div> */}
                </div>

                {/* Form Actions */}
                <div className="flex justify-end space-x-3 pt-4">
                  <Button
                    type="button"
                    onClick={onClose}
                    className="border border-gray-300 rounded-md text-black-text bg-white hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md disabled:opacity-50 text-nowrap"
                  >
                    {isSubmitting
                      ? initialData
                        ? "Updating..."
                        : "Creating..."
                      : initialData
                      ? "Update Pets"
                      : "Create Pets"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PetsForm;
