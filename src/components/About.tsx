import Person from "../images/about/person.png";

export default function About() {
  return (
    <section id="about">
      <img className="about-image" src={Person} />

      <div className="about-details">
        <h3 className="about-title">
          <span>About</span> Me
        </h3>

        <p className="about-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          totam commodi molestias odio facere rerum adipisci esse rem recusandae
          praesentium.
        </p>

        <a className="about-button" href="#services">
          <p className="about-button-text">Contact Me</p>
        </a>
      </div>
    </section>
  );
}
