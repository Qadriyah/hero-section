import { Button } from "antd";
import { useDrawer } from "../hooks/useDrawer";
import DrawerNav from "./DrawerNav";
import MenuIcon from "./MenuIcon";
import NavBar from "./NavBar";

const Header = () => {
  const { open, toggleOpen } = useDrawer();

  return (
    <header className="header">
      <div className="flex gap-2 items-center">
        <div className="flex md:hidden">
          <div className="flex">
            <Button
              type="link"
              size="large"
              onClick={toggleOpen}
              style={{ padding: 0 }}
              icon={<MenuIcon />}
            />
          </div>
        </div>
        <img src="/images/logo.png" width={106.94} height={34} alt="logo" />
      </div>
      <NavBar className="nav-links" />
      <div className="relative overflow-hidden bg-[#007aff] py-2.75 px-4.5 h-10.25 rounded-[2.75rem] group cursor-pointer flex justify-center items-center hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]">
        <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
        <span className="relative z-10 text-white group-hover:text-[#007aff] transition-colors duration-300">
          Contact Sales
        </span>
      </div>
      <DrawerNav open={open} onClose={toggleOpen} />
    </header>
  );
};

export default Header;
