import { useState } from "react";

import { ContactType } from "../interfaces/Contact.ts";
import { inputs, options } from "../models/Contact.ts";

import useContactForm from "../hooks/useContactForm.tsx";

import Title from "./Common/Title.tsx";
import Input from "./Contacts/Input";
import Option from "./Contacts/Option.tsx";

export default function Contacts() {
  const [type, setType] = useState<ContactType>(ContactType.Comment);
  const { values, handleSubmit, handleChange } = useContactForm(type);

  return (
    <section id="contacts">
      <Title primary="Contact" secondary="Me" />

      <div className="contacts-information">
        <div className="contacts-options scroll">
          {options.map((option, i) => (
            <Option
              key={i}
              {...option}
              isSelected={option.type === type}
              onSelect={() => setType(option.type)}
            />
          ))}
        </div>

        <form className="contacts-form scroll" onSubmit={handleSubmit}>
          {inputs.map((input, i) => {
            const value = values[`${input.name as keyof typeof values}`];

            return (
              <Input
                key={i}
                {...input}
                onChange={handleChange}
                value={value.toString()}
              />
            );
          })}

          <button className="form-button" type="submit">
            <p className="form-button-text">
              {type === ContactType.Comment ? "Add Comment" : "Send Request"}
            </p>
          </button>
        </form>
      </div>
    </section>
  );
}
