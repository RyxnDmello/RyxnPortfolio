import SendIcon from "../images/buttons/send.png";

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
          <div className="nav-section-links">
            <Link url="#pricing" text="Services" solid={false} />
            <Link url="#skills" text="Skills" solid={false} />
            <Link url="#projects" text="Portfolio" solid={false} />
            <Link url="#contacts" text="Contacts" solid={false} />
          </div>

          <Link url="#" text="Download CV" solid />
        </div>
      </nav>

      <Heading title="Software Developer" />

      <div className="header-information">
        <div className="header-details">
          <Title />

          <div className="header-buttons">
            <Button url="#pricing" text="Services" icon={SendIcon} solid />
            <Button url="#" text="Download CV" solid={false} />
          </div>
        </div>
      </div>
    </header>
  );
}
