import React from "react";
import Image from "next/image";
interface Props {
  renderDefault(data: Props): void;
  title: string;
}

const StudioLogo = (props: Props) => {
  return (
    <div className="flex items-center gap-2 bg-gray-700 px-2 rounded">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
        objectFit="cover"
      />
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioLogo;
