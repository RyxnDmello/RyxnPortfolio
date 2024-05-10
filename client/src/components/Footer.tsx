import { links, inspires } from "../models/Footer";
import { socials } from "../models/Socials";

import Copyright from "../images/buttons/copyright.svg";
import GitHub from "../images/buttons/github.svg";

import Logo from "./Common/Logo";
import Top from "./Common/Top";

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
          <div className={`${className}-column-feature`}>
            <p className={`${className}-column-feature-title`}>Inspired</p>

            <div className={`${className}-column-feature-links`}>
              {inspires.map((inspire, i) => (
                <Link key={i} {...inspire} direction="row" />
              ))}
            </div>
          </div>

          <div className={`${className}-column-feature`}>
            <p className={`${className}-column-feature-title`}>Connect</p>

            <div className={`${className}-column-feature-links`}>
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

      <hr className={`${className}-divider`} />

      <div className={`${className}-row`}>
        <div className={`${className}-conclusion`}>
          <img className={`${className}-conclusion-icon l`} src={Copyright} />

          <p className={`${className}-conclusion-text`}>
            2024 • Ryan Nolasco D Mello
          </p>
        </div>

        <a
          className={`${className}-conclusion`}
          href={GitHubURL}
          target="_blank"
        >
          <img className={`${className}-conclusion-icon`} src={GitHub} />
          <p className={`${className}-conclusion-text`}>GitHub</p>
        </a>
      </div>

      <Top />
    </footer>
  );
}

const GitHubURL = "https://github.com//RyxnDmello";
