import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link"

export type GroupComponentType = {
  className?: string;

  /** Style props */
  groupHeaderFlex?: CSSProperties["flex"];
  groupHeaderAlignSelf?: CSSProperties["alignSelf"];
  groupHeaderTop?: CSSProperties["top"];
  groupHeaderPosition?: CSSProperties["position"];

  /** Action props */
  onContactTextClick?: () => void;
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  groupHeaderFlex,
  groupHeaderAlignSelf,
  groupHeaderTop,
  groupHeaderPosition,
  onContactTextClick,
}) => {
  const groupHeaderStyle: CSSProperties = useMemo(() => {
    return {
      flex: groupHeaderFlex,
      alignSelf: groupHeaderAlignSelf,
      top: groupHeaderTop,
      position: groupHeaderPosition,
    };
  }, [
    groupHeaderFlex,
    groupHeaderAlignSelf,
    groupHeaderTop,
    groupHeaderPosition,
  ]);

  return (
    <header
      className={`flex-1 bg-white flex flex-row items-start justify-center py-9 pl-[425px] pr-5 box-border gap-[45px] max-w-full lg:pl-[212px] lg:box-border mq750:gap-[22px] mq750:pl-[106px] mq750:box-border mq450:pl-5 mq450:box-border ${className}`}
      style={groupHeaderStyle}
    >
      <div className="h-[100px] w-[1440px] relative bg-white hidden max-w-full" />
      <nav className="m-0 w-[543px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full mq750:hidden">
        <nav className="m-0 w-[430px] h-6 relative max-w-full text-left text-base text-black font-poppins">
          <Link href="./" className="[text-decoration:none] absolute top-[0px] left-[0px] font-medium text-[inherit] inline-block w-[49px] h-6 min-w-[49px] z-[1]">
            Home
           </Link>
          <a className="[text-decoration:none] absolute top-[0px] left-[123px] font-medium text-[inherit] inline-block w-[43px] h-6 min-w-[43px] z-[1]">
            Shop
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[240px] font-medium text-[inherit] inline-block w-[50px] h-6 min-w-[50px] z-[1]">
            About
          </a>
          <a
            className="[text-decoration:none] absolute top-[0px] left-[364px] font-medium text-[inherit] inline-block w-[67px] h-6 min-w-[67px] z-[1]"
            onClick={onContactTextClick}
          >
            Contact
          </a>
        </nav>
      </nav>
      <Image
        className="h-7 w-7 relative overflow-hidden shrink-0 z-[1]"
        loading="lazy"
        width={28}
        height={28}
        alt=""
        src="/mdiaccountalertoutline.svg"
      />
      <div className="w-[174px] flex flex-row items-start justify-between gap-5">
        <Image
          className="h-7 w-7 relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          width={28}
          height={28}
          alt=""
          src="/akariconssearch.svg"
        />
        <Image
          className="h-7 w-7 relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          width={28}
          height={28}
          alt=""
          src="/akariconsheart.svg"
        />
        <Image
          className="h-7 w-7 relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          width={28}
          height={28}
          alt=""
          src="/antdesignshoppingcartoutlined.svg"
        />
      </div>
    </header>
  );
};

export default GroupComponent;
