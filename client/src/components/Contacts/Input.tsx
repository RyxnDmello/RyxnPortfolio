import { IInput } from "../../interfaces/Contact";

export default function Input({
  label,
  icon,
  value,
  name,
  type,
  required,
  onChange,
}: IInput) {
  const className = "form-input";

  return (
    <div className={`${className} ${value!.length > 0 && "valid"}`}>
      {label && icon && (
        <div className={`${className}-label`}>
          <img className={`${className}-label-icon`} src={icon} />
          <p className={`${className}-label-text`}>{label}</p>
        </div>
      )}

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
