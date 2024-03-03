import { domains } from "../models/Domains";

import Circles from "./decorations/Circles";

import Title from "./Common/Title";
import Domain from "./Skills/Domain";

export default function Skills() {
  return (
    <section id="skills">
      <Title primary="Technical" secondary="Skills" />

      <div className="skills-domains">
        {domains.map((domain, index) => (
          <Domain key={index} {...domain} />
        ))}
      </div>

      <Circles />
    </section>
  );
}
