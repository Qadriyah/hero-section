import { Drawer } from "antd";
import type React from "react";
import NavBar from "./NavBar";

type DrawerNavProps = {
  open?: boolean;
  onClose?: () => void;
};

const DrawerNav: React.FC<DrawerNavProps> = ({ open, onClose }) => {
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
      key="left"
    >
      <NavBar className="drawer-nav-links" />
    </Drawer>
  );
};

export default DrawerNav;
