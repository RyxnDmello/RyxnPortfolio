import { useState } from "react";

import { IContact, ContactType } from "../interfaces/Contact.ts";
import { inputs, options } from "../models/Contact.ts";

import Title from "./Common/Title.tsx";
import Input from "./Contacts/Input";
import Option from "./Contacts/Option.tsx";

export default function Contacts() {
  const [contact, setContact] = useState<IContact>({
    type: ContactType.Comment,
    name: "",
    email: "",
    number: "",
    description: "",
  });

  const onHandleContact = (identifier: string, value: string | ContactType) => {
    setContact((prevContact) => ({
      ...prevContact,
      [identifier]: value,
    }));
  };

  return (
    <section id="contacts">
      <Title primary="Contact" secondary="Me" />

      <div className="contacts-information">
        <div className="contacts-options scroll">
          {options.map((option, i) => (
            <Option
              key={i}
              {...option}
              isSelected={option.type === contact.type}
              onSelect={() => onHandleContact("type", option.type)}
            />
          ))}
        </div>

        <form className="contacts-form scroll" action="/contact" method="post">
          {inputs.map((input, i) => {
            const value = contact[`${input.name as keyof typeof contact}`];

            return (
              <Input
                key={i}
                {...input}
                onChange={onHandleContact}
                value={value.toString()}
              />
            );
          })}

          <button className="form-button" type="submit">
            <p className="form-button-text">
              {contact.type === ContactType.Comment
                ? "Add Comment"
                : "Send Request"}
            </p>
          </button>
        </form>
      </div>
    </section>
  );
}
