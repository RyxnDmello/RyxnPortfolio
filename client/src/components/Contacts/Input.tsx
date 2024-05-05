export default function Input({
  label,
  icon,
  value,
  name,
  type,
  onChange,
}: IInput) {
  const className = "form-input";

  return (
    <div className={`${className} ${value.length > 0 && "valid"}`}>
      {label && icon && (
        <div className={`${className}-label`}>
          <img className={`${className}-label-icon`} src={icon} />
          <p className={`${className}-label-text`}>{label}</p>
        </div>
      )}

      {type === "textarea" ? (
        <textarea
          onChange={(event) => onChange(name, event.target.value)}
          className={`${className}-field`}
          value={value}
          name={name}
          required
          rows={5}
        ></textarea>
      ) : (
        <input
          onChange={(event) => onChange(name, event.target.value)}
          className={`${className}-field`}
          autoComplete="off"
          value={value}
          name={name}
          type={type}
          required
        />
      )}
    </div>
  );
}

interface IInput {
  label?: string;
  icon?: string;
  value: string;
  name: string;
  type: "text" | "textarea" | "email" | "number";
  onChange: (identifier: string, value: string) => void;
}
