import { forwardRef } from "react";

import { IToaster } from "../../interfaces/Contact";

import Icon from "../../images/contact/toaster.svg";

const Toaster = forwardRef<HTMLDivElement, IToaster>(
  ({ title, description }, ref) => {
    const className = "form-toaster";

    return (
      <div ref={ref} className={className}>
        <img className={`${className}-icon`} src={Icon} />

        <p className={`${className}-description`}>
          <span>{title}</span> {description}
        </p>
      </div>
    );
  }
);

export default Toaster;
