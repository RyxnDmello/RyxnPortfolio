import { links, inspires } from "../models/Footer";
import { socials } from "../models/Socials";

import Copyright from "../images/buttons/copyright.svg";
import GitHub from "../images/buttons/github.svg";

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
            <Link key={i} {...link} external={false} direction="column" />
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
                <Link key={i} {...inspire} external direction="row" />
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
          <img src={Copyright} />
          <p>{_year} • Ryan Nolasco D Mello</p>
        </div>

        <a href="https://github.com//RyxnDmello" target="_blank">
          <img src={GitHub} />
          <p>GitHub</p>
        </a>
      </div>

      <Top />
    </footer>
  );
}
