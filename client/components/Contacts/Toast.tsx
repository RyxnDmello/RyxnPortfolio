import Image from "next/image";
import { forwardRef } from "react";

import Icon from "@public/contact/toaster.svg";

import { Toaster } from "@interfaces/Contact";

import styles from "./Toast.module.scss";

const Toast = forwardRef<HTMLDivElement, Toaster>(
  ({ title, description }, ref) => {
    return (
      <div ref={ref} className={styles.toast}>
        <Image src={Icon} width={0} height={0} alt="" />

        <p>
          <span>{title}</span> {description}
        </p>
      </div>
    );
  }
);

export default Toast;
