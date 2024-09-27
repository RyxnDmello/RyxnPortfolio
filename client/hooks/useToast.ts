import { useState, useRef } from "react";

import styles from "@components/Contacts/Toast.module.scss";

export type TOAST = "SUCCESS" | "FAILURE";

export default function useToast(duration: number = 5000) {
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<TOAST>("SUCCESS");

  const toast = useRef<HTMLDivElement>(null);

  const handleSetMessage = (message: string) => setMessage(message);
  const handleSetType = (type: TOAST) => setType(type);

  const handleToggleToast = () => {
    toast.current!.classList.remove(styles.hide);
    toast.current!.classList.add(styles.reveal);

    setTimeout(() => {
      toast.current!.classList.remove(styles.reveal);
      toast.current!.classList.add(styles.hide);
    }, duration);
  };

  return {
    toast,
    type,
    message,
    handleSetType,
    handleSetMessage,
    handleToggleToast,
  };
}
