import Title from "./Skills/Title";
import Domain from "./Skills/Domain";

import { domains } from "../data/Domains";

export default function Skills() {
  return (
    <section id="skills">
      <Title />

      <div className="skills-domains">
        {domains.map((domain) => (
          <Domain title={domain.title} skills={domain.skills} />
        ))}
      </div>
    </section>
  );
}
