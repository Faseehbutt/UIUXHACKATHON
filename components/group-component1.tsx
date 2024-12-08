import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type GroupComponent1Type = {
  className?: string;
  maskGroup: string;
  trentonModularSofa3?: string;

  /** Style props */
  trentonModularSofa3Width?: CSSProperties["width"];
  trentonModularSofa3Display?: CSSProperties["display"];
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  maskGroup,
  trentonModularSofa3,
  trentonModularSofa3Width,
  trentonModularSofa3Display,
}) => {
  const trentonModularSofa3Style: CSSProperties = useMemo(() => {
    return {
      width: trentonModularSofa3Width,
      display: trentonModularSofa3Display,
    };
  }, [trentonModularSofa3Width, trentonModularSofa3Display]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[12.5px] min-w-[264px] max-w-[287px] text-left text-base text-black font-poppins ${className}`}
    >
      <Image
        className="w-[287px] h-[287px] relative object-cover"
        loading="lazy"
        width={287}
        height={287}
        alt=""
        src={maskGroup}
      />
      <div className="relative" style={trentonModularSofa3Style}>
        {trentonModularSofa3}
      </div>
      <div className="relative text-5xl font-medium mq450:text-lgi">
        Rs. 25,000.00
      </div>
    </div>
  );
};

export default GroupComponent1;
