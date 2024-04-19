import Image from "next/image";
import Link from "next/link";
import logo from "../../public/hexta-studio.svg";

export const Navbar = ({ docs }) => {
  return (
    <>
      <nav
        className={`flex items-center justify-between p-10 navbar ${
          docs && "ml-auto max-w-7xl "
        }`}
      >
        <div className="flex items-center justify-center gap-4 navbar-header">
          <Image src={logo} width={40} height={40} alt="HextaUI" />
          <span className="text-xl font-bold bricolage-fonts max-[350px]:hidden">
            HextaUI
          </span>
        </div>
        <div className="flex items-center justify-center navbar-links max-sm:hidden">
          <ul className="flex items-center gap-5 text-sm list-none">
            <li>
              <Link href="/components" className="opacity-75 hover:opacity-100">
                Components
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="opacity-75 hover:opacity-100">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-cta">
          <Link href="/components" className="primary-button">
            Get Started
          </Link>
        </div>
      </nav>
    </>
  );
};
