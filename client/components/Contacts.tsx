"use client";

import { useState, useEffect, useRef } from "react";

import {
  useInView,
  useAnimation,
  motion,
  Variants,
  Transition,
} from "framer-motion";

import { CONTACT } from "@interfaces/Contact";
import { inputs, options } from "@models/Contact";

import Reset from "@public/inputs/reset.png";

import useContact from "@hooks/useContact";

import Title from "./Common/Title";
import Option from "./Contacts/Option";
import Input from "./Contacts/Input";
import Button from "./Contacts/Button";
import Toast from "./Contacts/Toast";

import styles from "./Contacts.module.scss";

export default function Contacts() {
  const [type, setType] = useState<CONTACT>("Comment");

  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();

  const visible = useInView(ref, {
    margin: "0px 0px -500px 0px",
    once: true,
  });

  const {
    type: _,
    toast,
    values,
    errors,
    message,
    handleChange,
    handleSubmit,
    handleReset,
    handleToggleToast,
  } = useContact(type);

  const variants: Variants = {
    hidden: { opacity: 0, translateY: -40 },
    reveal: { opacity: 1, translateY: 0 },
  };

  const transitions: Transition = {
    type: "spring",
    staggerChildren: 0.25,
  };

  useEffect(() => {
    if (visible) controls.start("reveal");
  }, [visible]);

  return (
    <motion.section
      id="contacts"
      className={styles.contacts}
      transition={transitions}
      variants={variants}
      animate={controls}
      initial="hidden"
      ref={ref}
    >
      <Title title="Contact" />

      <div>
        <div className={`${styles.options} scroll`}>
          {options.map((option) => (
            <Option
              key={option.name}
              {...option}
              active={option.type === type}
              onSelect={() => setType(option.type)}
            />
          ))}
        </div>

        <form
          className={`${styles.form} scroll`}
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          {inputs.map((input) => {
            const value = values[`${input.name as keyof typeof values}`];
            const error = errors[`${input.name as keyof typeof errors}`];

            return (
              <Input
                key={input.name}
                {...input}
                error={!!error}
                onChange={handleChange}
                value={value.toString()}
              />
            );
          })}

          <div>
            <Button type="submit" onClick={handleToggleToast} />
            <Button icon={Reset} type="reset" />
          </div>
        </form>

        <Toast ref={toast} type={_} message={message} />
      </div>
    </motion.section>
  );
}
