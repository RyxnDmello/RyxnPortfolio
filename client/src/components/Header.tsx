import SendIcon from "../images/buttons/send.svg";

import Logo from "./Common/Logo";
import Link from "./Header/Link";
import Heading from "./Header/Heading";
import Title from "./Header/Title";
import Button from "./Header/Button";

export default function Header() {
  return (
    <header id="header">
      <nav>
        <Logo />

        <div className="nav-links">
          <div className="nav-utils-links">
            <Link url="#services" text="Services" />
            <Link url="#skills" text="Skills" />
            <Link url="#projects" text="Portfolio" />
            <Link url="#contacts" text="Contacts" />
          </div>

          <Link url="#" text="Download CV" isButton />
        </div>
      </nav>

      <Heading title="Software Developer" />

      <div className="header-information">
        <div className="header-details">
          <Title />

          <div className="header-buttons">
            <Button url="#" text="Services" icon={SendIcon} isSolid />
            <Button url="#" text="Download CV" />
          </div>
        </div>
      </div>
    </header>
  );
}
