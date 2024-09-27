import Image from "next/image";
import { forwardRef } from "react";

import Icon from "@public/contact/toaster.svg";

import styles from "./Toast.module.scss";

interface Toast {
  type: "SUCCESS" | "FAILURE";
  message: string;
}

const Toast = forwardRef<HTMLDivElement, Toast>(({ type, message }, ref) => {
  return (
    <div ref={ref} className={`${styles.toast} ${styles[type.toLowerCase()]}`}>
      <Image src={Icon} width={0} height={0} alt="" />
      <p>{message}</p>
    </div>
  );
});

export default Toast;
