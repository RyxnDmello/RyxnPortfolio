import { useRef } from "react";
import { useFormik } from "formik";
import axios from "axios";

import { ContactType, IContact } from "../interfaces/Contact";
import { validationSchema } from "../schemas/Contact";

const _api: string = import.meta.env.PROD
  ? `${import.meta.env.VITE_SERVER_API}/api`
  : "/api";

export default function useContactForm(type: ContactType) {
  const toasterRef = useRef<HTMLDivElement>(null);

  const initialValues: IContact = {
    name: "",
    email: "",
    number: "",
    designation: "",
    description: "",
  };

  const submitComment = async () => {
    await axios.post(`${_api}/contacts/comment`, {
      ...values,
    });
  };

  const submitService = async () => {
    await axios.post(`${_api}/contacts/service`, {
      type: ContactType[type],
      ...values,
    });
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
    useFormik<IContact>({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: async () => {
        type === ContactType.Comment
          ? await submitComment()
          : await submitService();
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
