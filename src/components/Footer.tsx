import { links, inspires } from "../models/Footer";
import { socials } from "../models/Socials";

import Logo from "./Common/Logo";
import Link from "./Footer/Link";
import Social from "./Footer/Social";

export default function Footer() {
  const className = "footer";

  return (
    <footer>
      <div className={`${className}-row`}>
        <Logo />

        <div className={`${className}-links`}>
          {links.map((link, i) => (
            <Link key={i} {...link} />
          ))}
        </div>
      </div>

      <hr className={`${className}-divider`} />

      <div className={`${className}-row`}>
        <div className={`${className}-column`}>
          <div className={`${className}-column-panel`}>
            <p className={`${className}-column-panel-title`}>Inspired</p>

            <div className={`${className}-column-panel-links`}>
              {inspires.map((inspire, i) => (
                <Link key={i} {...inspire} direction="row" />
              ))}
            </div>
          </div>

          <div className={`${className}-column-panel`}>
            <p className={`${className}-column-panel-title`}>Connect</p>

            <div className={`${className}-column-panel-links`}>
              {socials.map((social, i) => (
                <Social key={i} {...social} />
              ))}
            </div>
          </div>
        </div>

        <p className={`${className}-message`}>
          Let's <span>Build</span> Together
        </p>
      </div>
    </footer>
  );
}
