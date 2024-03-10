import { useState } from "react";

import { IContact } from "../interfaces/Contact.ts";

import Title from "./Common/Title.tsx";

import UserIcon from "../images/inputs/username.png";
import EmailIcon from "../images/inputs/email.png";
import NumberIcon from "../images/inputs/number.png";
import DescriptionIcon from "../images/inputs/description.png";

import Input from "./Contacts/Input";

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
        <div className="contacts-types"></div>

        <form className="contacts-form" action="/contact" method="post">
          <Input
            onChange={onHandleContact}
            value={contact.name}
            icon={UserIcon}
            label="Name"
            name="name"
            type="text"
          />

          <Input
            onChange={onHandleContact}
            value={contact.email}
            icon={EmailIcon}
            label="Email"
            name="email"
            type="email"
          />

          <Input
            onChange={onHandleContact}
            value={contact.number}
            icon={NumberIcon}
            label="Number"
            name="number"
            type="number"
          />

          <Input
            onChange={onHandleContact}
            value={contact.description}
            icon={DescriptionIcon}
            label="Description"
            name="description"
            type="textarea"
          />

          <button className="form-button" type="submit">
            <p className="form-button-text">Send Request</p>
          </button>
        </form>
      </div>
    </section>
  );
}
