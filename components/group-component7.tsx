import type { NextPage } from "next";
import Image from "next/image";

export type GroupComponent7Type = {
  className?: string;
};

const GroupComponent7: NextPage<GroupComponent7Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-12 max-w-full text-left text-5xl text-darkgray font-poppins mq750:gap-6 ${className}`}
    >
      <div className="self-stretch h-[744px] relative bg-white hidden" />
      <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border" />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[17px] pl-5 pr-[21px] box-border max-w-full shrink-0">
        <div className="flex flex-col items-end justify-start gap-[36.5px] max-w-full mq750:gap-[18px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[22px] pr-5 box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[53px] max-w-full mq750:gap-[26px] mq750:flex-wrap">
              <h3 className="m-0 relative text-inherit font-normal font-[inherit] text-black z-[1] mq450:text-lgi">
                Description
              </h3>
              <h3 className="m-0 relative text-inherit font-normal font-[inherit] z-[1] mq450:text-lgi">
                Additional Information
              </h3>
              <h3 className="m-0 relative text-inherit font-normal font-[inherit] z-[1] mq450:text-lgi">
                Reviews [5]
              </h3>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full text-justify text-base">
            <div className="w-[1026px] flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="relative z-[1]">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </div>
              <div className="relative z-[1]">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-[29px] max-w-full">
            <Image
              className="h-[348px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[393px] z-[1] mq750:min-w-full"
              loading="lazy"
              width={605}
              height={348}
              alt=""
              src="/group-107@2x.png"
            />
            <Image
              className="h-[348px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[393px] z-[1] mq750:min-w-full"
              loading="lazy"
              width={605}
              height={348}
              alt=""
              src="/group-106@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative border-gainsboro border-t-[1px] border-solid box-border" />
    </section>
  );
};

export default GroupComponent7;
