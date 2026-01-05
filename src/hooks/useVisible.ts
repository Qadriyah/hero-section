import React from "react";

export function useVisible() {
  const [visible, setVisible] = React.useState(true);

  return { visible, setVisible };
}
