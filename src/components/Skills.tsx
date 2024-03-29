import { domains } from "../models/Skills";

import Dashes from "./Decorations/Dashes";

import Title from "./Common/Title";
import Domain from "./Skills/Domain";

export default function Skills() {
  return (
    <section id="skills">
      <Title primary="Technical" secondary="Skills" />

      <div className="skills-domains">
        {domains.map((domain, i) => (
          <Domain key={i} {...domain} />
        ))}
      </div>

      <Dashes />
    </section>
  );
}
