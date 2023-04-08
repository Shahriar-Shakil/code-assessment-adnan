import { StarIcon } from "@heroicons/react/20/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Badge from "./Badge";
type Props = {};

export default function ProductCardHorizontal({}: Props) {
  return (
    <div className="relative   border border-white-50 py-[30px] px-[50px] max-w-[560px]">
      {/* card head */}
      <div className="absolute  top-[10px] left-[10px]">
        <Badge type="sale">Sale</Badge>
      </div>
      <div className="flex items-center flex-col md:flex-row">
        <div className=" flex-none  m-0">
          <Image
            src="/images/products/product-sm1.png"
            alt=""
            width="87"
            height="89"
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
              Sanung 85Q70A 85 Inch QLED 4K UHD Smart LED Television
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

      {/* card head */}
      {/* card body */}
    </div>
  );
}
