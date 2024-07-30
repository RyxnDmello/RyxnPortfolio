import { useRef } from "react";
import { useFormik } from "formik";
import axios from "axios";

import { CONTACT, Contact } from "@interfaces/Contact";
import { validationSchema } from "@schemas/Contact";

export default function useContactForm(type: CONTACT) {
  const toasterRef = useRef<HTMLDivElement>(null);

  const initialValues: Contact = {
    name: "",
    email: "",
    number: "",
    designation: "",
    description: "",
  };

  const submitComment = async () => {
    await axios.post(`/api/contacts/comment`, values);
  };

  const submitService = async () => {
    await axios.post(`/api/contacts/service`, { type, ...values });
  };

  const showToaster = () => {
    if (Object.keys(errors).length !== 0 || values.email.length === 0) return;

    toasterRef.current!.classList.remove("toaster-hide");
    toasterRef.current!.classList.add("toaster-reveal");

    setTimeout(() => {
      toasterRef.current!.classList.remove("toaster-reveal");
      toasterRef.current!.classList.add("toaster-hide");
      handleReset({});
    }, 5000);
  };

  const { values, errors, handleSubmit, handleChange, handleReset } =
    useFormik<Contact>({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: async () => {
        type === "Comment" ? await submitComment() : await submitService();
      },
    });

  return {
    values,
    errors,
    toasterRef,
    handleChange,
    handleSubmit,
    handleReset,
    showToaster,
  };
}
