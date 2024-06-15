import { forwardRef } from "react";

import { IToaster } from "../../interfaces/Contact";

import Icon from "../../images/contact/toaster.svg";

import styles from "./Toast.module.scss";

const Toast = forwardRef<HTMLDivElement, IToaster>(
  ({ title, description }, ref) => {
    return (
      <div ref={ref} className={styles.toast}>
        <img src={Icon} />

        <p>
          <span>{title}</span> {description}
        </p>
      </div>
    );
  }
);

export default Toast;
