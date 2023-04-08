import { StarIcon } from "@heroicons/react/20/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Badge from "./Badge";

type Props = {
  product: any;
};

export default function ProductCardVertical({ product }: Props) {
  return (
    <div className="relative border border-white-50 p-5 min-w-[280px]">
      {/* card head */}
      <div className="mt-5">
        <Image
          src={product.image}
          alt=""
          width="214"
          height="161"
          className="max-h-[160px] object-contain mx-auto"
        />
      </div>
      <div className="absolute top-[10px] left-[10px]">
        <Badge type={product.type}>{product.type}</Badge>
      </div>
      {/* card head */}
      {/* card body */}
      <div className="mt-[55px] px-[10px]">
        <p className="text-gray-100 text-xs leading-[12px] font-medium mb-2">
          Smart tv
        </p>
        <div className="space-y-[15px]">
          <p className="text-base  leading-[26px] font-medium text-black line-clamp-2 lg:line-clamp-none">
            {product.name}
          </p>
          <div className="flex items-end space-x-[6px]">
            <div className="flex items-center">
              <StarIcon
                className="text-yellow-400 w-5 h-5"
                aria-hidden="true"
              />{" "}
              <StarIcon
                className="text-yellow-400 w-5 h-5"
                aria-hidden="true"
              />{" "}
              <StarIcon
                className="text-yellow-400 w-5 h-5"
                aria-hidden="true"
              />{" "}
              <StarIcon
                className="text-yellow-400 w-5 h-5"
                aria-hidden="true"
              />{" "}
              <StarIcon
                className="text-yellow-400 w-5 h-5"
                aria-hidden="true"
              />{" "}
            </div>
            <p className="text-gray-100 text-[11px] leading-3 font-medium">
              (5.0)
            </p>
          </div>
          <div className="flex items-end space-x-1">
            <p className="text-green-400 tracking-['-0.03em'] text-base font-bold leading-4 ">
              ${product.price}
            </p>
            <p className="text-gray-200 text-xs leading-3 font-medium  line-through">
              ${product.oldPrice}
            </p>
          </div>
        </div>
      </div>
      <button className="text-green-400 py-[15px] bg-green-100 bg-opacity-20 mt-[25px] rounded w-full text-[15px] leading-[15px] font-medium tracking-['-0.02em'] ">
        {" "}
        <div className="flex justify-center items-center space-x-[10px]">
          <span>Add to Cart</span>
          <ShoppingBagIcon className=" w-5 h-5" />
        </div>
      </button>
    </div>
  );
}
