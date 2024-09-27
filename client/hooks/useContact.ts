import { useFormik } from "formik";
import axios, { AxiosError } from "axios";

import { CONTACT, Contact } from "@interfaces/Contact";
import { validationSchema } from "@schemas/ContactSchema";

import useToast from "./useToast";

export default function useContact(_: CONTACT) {
  const {
    type,
    toast,
    message,
    handleSetMessage,
    handleSetType,
    handleToggleToast,
  } = useToast();

  const initialValues: Contact = {
    name: "",
    email: "",
    mobile: "",
    designation: "",
    description: "",
  };

  const handleCreateService = async () => {
    try {
      await axios.post("/api/service", {
        type: _,
        ...values,
      });

      handleSetType("SUCCESS");
      handleSetMessage(
        _ === "Comment"
          ? "Thank You For Your Time And Feedback!"
          : "Your Request Has Been Sent Successfully!"
      );
    } catch (error) {
      handleSetType("FAILURE");
      handleSetMessage(
        error instanceof AxiosError && error.response!.data.error
      );
    } finally {
      handleReset({});
    }
  };

  const { values, errors, handleSubmit, handleChange, handleReset } =
    useFormik<Contact>({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: handleCreateService,
    });

  return {
    type,
    toast,
    values,
    errors,
    message,
    handleChange,
    handleSubmit,
    handleReset,
    handleToggleToast,
  };
}
