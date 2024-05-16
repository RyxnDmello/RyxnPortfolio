import { IInput } from "../../interfaces/Contact";

import Required from "../../images/inputs/required.png";

export default function Input({
  label,
  icon,
  value,
  name,
  type,
  error,
  required,
  onChange,
}: IInput) {
  const className = "form-input";

  return (
    <div className={`${className} ${error && "error"}`}>
      <div className={`${className}-label ${value!.length > 0 && "hidden"}`}>
        <img className={`${className}-label-icon`} src={icon} />
        <p className={`${className}-label-text`}>{label}</p>
      </div>

      {required && <img className={`${className}-required`} src={Required} />}

      {type === "textarea" ? (
        <textarea
          className={`${className}-field`}
          onChange={onChange}
          value={value}
          name={name}
          required
          rows={5}
        ></textarea>
      ) : (
        <input
          className={`${className}-field`}
          onChange={onChange}
          required={required}
          autoComplete="off"
          value={value}
          name={name}
          type={type}
        />
      )}
    </div>
  );
}
