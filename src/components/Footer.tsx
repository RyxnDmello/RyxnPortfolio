import Logo from "./Common/Logo";

export default function Footer() {
  const className = "footer";

  return (
    <footer>
      <div className={`${className}-header`}>
        <Logo />

        <p className={`${className}-message`}>
          Let's <span>Build</span> Together
        </p>
      </div>
    </footer>
  );
}
