import Link from "next/link";
import React from "react";

interface Props {
  renderDefault(data: Props): void;
}

const StudioNavbar = (props: Props) => {
  return (
    <div className="bg-blue-300">
      <div className="p-2">
        <Link href="/">↩ Back home</Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
