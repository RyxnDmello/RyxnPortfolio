import { useFormik } from "formik";
import axios from "axios";

import { ContactType, IContact } from "../interfaces/Contact";

export default function useContactForm(type: ContactType) {
  const initialValues: IContact = {
    name: "",
    email: "",
    number: "",
    designation: "",
    description: "",
  };

  const submitContact = async () => {
    await axios.post("http://localhost:8080/contacts", {
      type: ContactType[type],
      ...values,
    });
  };

  const { values, handleSubmit, handleChange, resetForm } = useFormik<IContact>(
    {
      initialValues: initialValues,
      onSubmit: async () => {
        await submitContact();
      },
    }
  );

  return { values, handleSubmit, handleChange, resetForm };
}
