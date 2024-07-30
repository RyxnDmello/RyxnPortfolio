import Image from "next/image";

import { links, inspires } from "@models/Footer";
import { socials } from "@models/Socials";

import Copyright from "@public/images/buttons/copyright.svg";
import GitHub from "@public/images/buttons/github.svg";

import Logo from "./Common/Logo";
import Top from "./Common/Top";
import Link from "./Footer/Link";
import Social from "./Footer/Social";

import styles from "./Footer.module.scss";

export default function Footer() {
  const _year = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.top}>
        <Logo />

        <div className="scroll">
          {links.map((link, i) => (
            <Link key={i} {...link} external={false} direction="COLUMN" />
          ))}
        </div>
      </div>

      <hr className="scroll" />

      <div className={styles.middle}>
        <div className={styles.features}>
          <div className="scroll">
            <p>Inspired</p>

            <div>
              {inspires.map((inspire, i) => (
                <Link key={i} {...inspire} external direction="ROW" />
              ))}
            </div>
          </div>

          <div className="scroll">
            <p>Connect</p>

            <div>
              {socials.map((social, i) => (
                <Social key={i} {...social} />
              ))}
            </div>
          </div>
        </div>

        <p className={`${styles.message} scroll`}>
          Let's <span>Build</span> Together
        </p>
      </div>

      <hr className="scroll" />

      <div className={`${styles.bottom} scroll`}>
        <div>
          <Image src={Copyright} width={0} height={0} alt="" />
          <p>{_year} • Ryan Nolasco D Mello</p>
        </div>

        <a href="https://github.com//RyxnDmello" target="_blank">
          <Image src={GitHub} width={0} height={0} alt="" />
          <p>GitHub</p>
        </a>
      </div>

      <Top />
    </footer>
  );
}
