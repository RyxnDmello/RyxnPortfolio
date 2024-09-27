import { useRef } from "react";
import { useFormik } from "formik";

import { CONTACT, Contact } from "@interfaces/Contact";
import { validationSchema } from "@schemas/ContactSchema";

export default function useContactForm(type: CONTACT) {
  const toastRef = useRef<HTMLDivElement>(null);

  const initialValues: Contact = {
    name: "",
    email: "",
    number: "",
    designation: "",
    description: "",
  };

  const handleCreateService = async () => {
    try {
      await fetch("/api/service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          ...values,
        }),
      });
    } catch (error) {
      console.log(error);
      console.error(error instanceof Error && error.message);
    }

    handleShowToast();
  };

  const handleShowToast = () => {
    if (Object.keys(errors).length !== 0 || values.email.length === 0) return;

    toastRef.current!.classList.remove("toaster-hide");
    toastRef.current!.classList.add("toaster-reveal");

    setTimeout(() => {
      toastRef.current!.classList.remove("toaster-reveal");
      toastRef.current!.classList.add("toaster-hide");
      handleReset({});
    }, 5000);
  };

  const { values, errors, handleSubmit, handleChange, handleReset } =
    useFormik<Contact>({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: handleCreateService,
    });

  return {
    values,
    errors,
    toastRef,
    handleChange,
    handleSubmit,
    handleReset,
  };
}
