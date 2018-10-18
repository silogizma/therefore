import React from "react";

import ConfigureIcon from "./configure.svg";

function getIconContent(type) {
  switch (type) {
    case "configure":
      return <ConfigureIcon />;
  }
}

export default function Icon({ type }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox={"0 0 24 24"}
      style={{
        fill: "gray"
      }}
    >
      {getIconContent(type)}
    </svg>
  );
}
