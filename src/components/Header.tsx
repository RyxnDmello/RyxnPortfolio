import Logo from "./Header/Logo";
import Link from "./Header/Link";

export default function Header() {
  return (
    <header>
      <nav>
        <Logo />

        <div className="nav-links">
          <div className="nav-utils-links">
            <Link URL="#" text="Services" />
            <Link URL="#" text="Portfolio" />
            <Link URL="#" text="Contacts" />
          </div>

          <Link URL="#" text="Download CV" isButton={true} />
        </div>
      </nav>
    </header>
  );
}
