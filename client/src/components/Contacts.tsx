import { useState } from "react";

import { ContactType } from "../interfaces/Contact.ts";
import { inputs, options } from "../models/Contact.ts";

import useContactForm from "../hooks/useContactForm.tsx";

import Title from "./Common/Title.tsx";
import Option from "./Contacts/Option.tsx";
import Input from "./Contacts/Input";
import Button from "./Contacts/Button.tsx";
import Toaster from "./Contacts/Toaster.tsx";

import ResetIcon from "../images/inputs/reset.png";

export default function Contacts() {
  const [type, setType] = useState<ContactType>(ContactType.Comment);

  const {
    values,
    errors,
    toasterRef,
    handleChange,
    handleSubmit,
    handleReset,
    showToaster,
  } = useContactForm(type);

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

        <form
          className="contacts-form scroll"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          {inputs.map((input, i) => {
            const value = values[`${input.name as keyof typeof values}`];
            const error = errors[`${input.name as keyof typeof errors}`];

            return (
              <Input
                key={i}
                {...input}
                error={!!error}
                onChange={handleChange}
                value={value.toString()}
              />
            );
          })}

          <div className="form-buttons">
            <Button type="submit" onClick={showToaster} />
            <Button icon={ResetIcon} type="reset" />
          </div>
        </form>

        {type === ContactType.Comment ? (
          <Toaster
            ref={toasterRef}
            title="Thank You"
            description="for lending your voice"
          />
        ) : (
          <Toaster
            ref={toasterRef}
            title="Service Request!"
            description="We will get back to you soon"
          />
        )}
      </div>
    </section>
  );
}
