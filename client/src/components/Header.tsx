import Icon from "../images/buttons/send.png";

import Logo from "./Common/Logo";
import Link from "./Header/Link";
import Heading from "./Header/Heading";
import Title from "./Header/Title";
import Button from "./Header/Button";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header id="header" className={styles.header}>
      <nav className={styles.nav}>
        <Logo />

        <div className={`${styles.links} scroll`}>
          <div>
            <Link url="#pricing" text="Services" solid={false} />
            <Link url="#skills" text="Skills" solid={false} />
            <Link url="#projects" text="Portfolio" solid={false} />
            <Link url="#contacts" text="Contacts" solid={false} />
          </div>

          <Link url="#" text="Download CV" solid />
        </div>
      </nav>

      <Heading title="Software Developer" />

      <div className={styles.details}>
        <Title />

        <div>
          <Button url="#pricing" text="Services" icon={Icon} solid />
          <Button url="#" text="Download CV" solid={false} />
        </div>
      </div>
    </header>
  );
}
