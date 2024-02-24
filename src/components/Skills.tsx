import { domains } from "../models/Domains";

import Title from "./Common/Title";
import Domain from "./Skills/Domain";

export default function Skills() {
  return (
    <section id="skills">
      <Title primary="Technical" secondary="Skills" isCentre />

      <div className="skills-domains">
        {domains.map((domain, index) => (
          <Domain key={index} {...domain} />
        ))}
      </div>
    </section>
  );
}
