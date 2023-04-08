import { StarIcon } from "@heroicons/react/20/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Badge from "./Badge";
type Props = {
  product: any;
};

export default function ProductCardHorizontal({ product }: Props) {
  return (
    <div className="relative   border border-white-50 bg-white-900  py-[30px] px-6 md:px-[50px] max-w-[560px]">
      {/* card head */}
      <div className="absolute  top-[10px] left-[10px]">
        <Badge type="sale">Sale</Badge>
      </div>
      <div className="flex items-center flex-col md:flex-row">
        <div className="w-[150px]">
          <Image
            src={product.image}
            alt=""
            width="120"
            height="120"
            className="object-contain "
          />
        </div>
        <div className=" px-[10px]">
          <div className="space-y-[12px]">
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
            <p className="text-base  leading-[26px] font-medium text-black">
              {product.name}
            </p>

            <div className="flex items-end space-x-1">
              <p className="text-green-400 tracking-['-0.03em'] text-base font-bold leading-4 ">
                $2036.00
              </p>
              <p className="text-gray-200 text-xs leading-3 font-medium  line-through">
                $3000.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
