import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponent3Type = {
  className?: string;
  maskGroup: string;
  plainConsole?: string;
  rs25820000?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivFlex?: CSSProperties["flex"];
  plainConsoleAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  maskGroup,
  frameDivWidth,
  frameDivFlex,
  plainConsole,
  plainConsoleAlignSelf,
  rs25820000,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
    };
  }, [frameDivFlex]);

  const plainConsoleStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: plainConsoleAlignSelf,
    };
  }, [plainConsoleAlignSelf]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-3.5 text-left text-base text-black font-poppins ${className}`}
    >
      <Image
        className="w-[287px] h-[287px] relative object-cover"
        loading="lazy"
        width={287}
        height={287}
        alt=""
        src={maskGroup}
      />
      <div
        className="flex flex-row items-start justify-start py-0 px-px"
        style={frameDiv1Style}
      >
        <div
          className="flex flex-col items-start justify-start gap-[11px]"
          style={frameDiv2Style}
        >
          <div className="relative" style={plainConsoleStyle}>
            {plainConsole}
          </div>
          <div className="relative text-5xl font-medium mq450:text-lgi">
            {rs25820000}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
