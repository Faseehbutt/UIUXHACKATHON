import type { NextPage } from "next";
import Image from "next/image";

export type ProductGridType = {
  className?: string;
};

const ProductGrid: NextPage<ProductGridType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-black font-poppins ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[30.7px] max-w-full z-[1] mq800:gap-[15px] mq1350:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[12.5px]">
          <Image
            className="w-[287px] h-[287px] relative object-cover"
            loading="lazy"
            width={287}
            height={287}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className="relative">Trenton modular sofa_3</div>
          <div className="relative text-5xl font-medium mq450:text-lgi">
            Rs. 25,000.00
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[13px]">
          <Image
            className="w-[287px] h-[287px] relative object-cover"
            loading="lazy"
            width={287}
            height={287}
            alt=""
            src="/mask-group-1@2x.png"
          />
          <div className="w-[212px] relative inline-block">
            Granite dining table with dining chair
          </div>
          <div className="relative text-5xl font-medium mq450:text-lgi">
            Rs. 25,000.00
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[13px]">
          <Image
            className="w-[287px] h-[287px] relative object-cover"
            loading="lazy"
            width={287}
            height={287}
            alt=""
            src="/mask-group-2@2x.png"
          />
          <div className="w-[212px] relative inline-block">
            Outdoor bar table and stool
          </div>
          <div className="relative text-5xl font-medium mq450:text-lgi">
            Rs. 25,000.00
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[13px]">
          <Image
            className="w-[287px] h-[287px] relative object-cover"
            loading="lazy"
            width={287}
            height={287}
            alt=""
            src="/mask-group-3@2x.png"
          />
          <div className="w-[199px] relative inline-block">
            Plain console with teak mirror
          </div>
          <div className="relative text-5xl font-medium mq450:text-lgi">
            Rs. 25,000.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
