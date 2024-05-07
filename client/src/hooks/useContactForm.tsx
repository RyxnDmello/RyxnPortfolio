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

  const submitComment = async () => {
    await axios.post("http://localhost:8080/contacts/comment", {
      ...values,
    });
  };

  const { values, handleSubmit, handleChange, resetForm } = useFormik<IContact>(
    {
      initialValues: initialValues,
      onSubmit: async () => {
        type === ContactType.Comment ? await submitComment() : undefined;
      },
    }
  );

  return { values, handleSubmit, handleChange, resetForm };
}