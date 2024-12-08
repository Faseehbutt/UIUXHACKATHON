import type { NextPage } from "next";

export type ProductDetailsType = {
  className?: string;
};

const ProductDetails: NextPage<ProductDetailsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-oldlace-100 overflow-x-auto flex flex-row items-start justify-between pt-[15px] pb-4 pl-[142px] pr-[145px] gap-5 z-[1] text-left text-base text-black font-poppins mq1150:pl-[71px] mq1150:pr-[72px] mq1150:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="h-[55px] w-[817px] relative bg-oldlace-100 shrink-0 hidden" />
      <div className="relative font-medium z-[2]">Product</div>
      <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5">
        <div className="relative font-medium inline-block min-w-[41px] z-[2]">
          Price
        </div>
      </div>
      <div className="w-[175px] shrink-0 flex flex-row items-start justify-start gap-9">
        <div className="relative font-medium z-[2]">Quantity</div>
        <div className="relative font-medium inline-block min-w-[70px] z-[2]">
          Subtotal
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
