import Logo from "./Header/Logo";
import Link from "./Header/Link";
import Heading from "./Header/Heading";
import Title from "./Header/Title";
import Button from "./Header/Button";

import SendIcon from "../images/buttons/send.png";

export default function Header() {
  return (
    <header>
      <nav>
        <Logo />

        <div className="nav-links">
          <div className="nav-utils-links">
            <Link URL="#" text="Services" />
            <Link URL="#" text="Portfolio" />
            <Link URL="#" text="Contacts" />
          </div>

          <Link URL="#" text="Download CV" isButton />
        </div>
      </nav>

      <Heading title="Software Developer" />

      <div className="header-information">
        <div className="header-details">
          <Title />

          <div className="header-buttons">
            <Button URL="#" text="Services" icon={SendIcon} isSolid />
            <Button URL="#" text="Download CV" />
          </div>
        </div>
      </div>
    </header>
  );
}
