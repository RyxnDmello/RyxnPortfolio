import { useState } from "react";

import { IContact } from "../interfaces/Contact.ts";
import { inputs, options } from "../models/Contact.ts";

import Title from "./Common/Title.tsx";
import Input from "./Contacts/Input";
import Option from "./Contacts/Option.tsx";

export default function Contacts() {
  const [contact, setContact] = useState<IContact>({
    name: "",
    email: "",
    number: "",
    type: "",
    description: "",
  });

  const onHandleContact = (identifier: string, value: string) => {
    setContact((prevContact) => ({
      ...prevContact,
      [identifier]: value,
    }));
  };

  return (
    <section id="contacts">
      <Title primary="Contact" secondary="Me" />

      <div className="contacts-information">
        <div className="contacts-options">
          {options.map((option) => (
            <Option
              name={option}
              onSelect={() => onHandleContact("type", option)}
            />
          ))}
        </div>

        <form className="contacts-form" action="/contact" method="post">
          {inputs.map((input, i) => (
            <Input
              key={i}
              {...input}
              onChange={onHandleContact}
              value={contact[`${input.name as keyof typeof contact}`]}
            />
          ))}

          <button className="form-button" type="submit">
            <p className="form-button-text">
              {contact.type === "Drop A Comment"
                ? "Add Comment"
                : "Send Request"}
            </p>
          </button>
        </form>
      </div>
    </section>
  );
}
