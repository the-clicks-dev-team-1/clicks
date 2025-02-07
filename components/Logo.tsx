import Image from "next/image";
import logoLightMode from "../public/logo/Logo1.svg";
import logoDarkMode from "../public/logo/LogoDark.png";
import ActiveLink from "./activelink";

const Logo = () => {
  return (
    <div className="w-24 h-24">
      {/* Light mode logo */}
      <ActiveLink href="/">
        <Image
          src={logoLightMode}
          alt=" logo"
          width={100}
          height={100}
          className="w-24 h-24 block dark:hidden"
        />
      </ActiveLink>

      {/* Dark mode logo */}
      <ActiveLink href="/">
        <Image
          src={logoDarkMode}
          alt=" logo"
          width={100}
          height={100}
          className="w-24 h-24 hidden dark:block"
        />
      </ActiveLink>
    </div>
  );
};

export default Logo;
