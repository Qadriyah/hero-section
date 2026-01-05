import React from "react";

export function useDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return { open, toggleOpen };
}
