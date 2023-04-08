import CountDownComponent from "@/components/UI/CountDown";
import ProductCardVertical from "@/components/UI/ProductCardVertical";
import { settings } from "@/utils";
import { productsVertical } from "@/utils/data";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import ProductCarousel from "./UI/Carousel";
type Props = {};

export default function FlashSellProducts({}: Props) {
  const slider = useRef<any>(null);
  return (
    <section className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
      <div className="md:col-span-3 lg:col-span-5 space-y-4">
        <div className="flex items-center flex-col lg:flex-row  space-y-6 lg:space-y-0">
          <div className="px-[15px] py-[14px] border-2 border-black inline-block">
            <h2 className="text-3xl md:text-[34px] leading-6 font-medium ">
              <span className="font-black	">Flash</span> Sale Product{" "}
            </h2>
          </div>
          <div className="ml-5">
            <CountDownComponent />
          </div>
          <div className="ml-auto flex space-x-1">
            <button
              onClick={() => {
                if (slider.current != null) {
                  slider?.current.slickPrev();
                }
              }}
              className="hover:bg-black hover:text-white-900 rounded-full w-12 h-12 flex justify-center items-center"
            >
              <ArrowLongLeftIcon className=" w-7 " />
            </button>
            <button
              onClick={() => slider?.current.slickNext()}
              className="hover:bg-black hover:text-white-900 rounded-full w-12 h-12 flex justify-center items-center"
            >
              <ArrowLongRightIcon className=" w-7 " />
            </button>
          </div>
        </div>
        <ProductCarousel settings={settings} sliderRef={slider}>
          {productsVertical?.map((product, i) => {
            return <ProductCardVertical key={i} product={product} />;
          })}
        </ProductCarousel>
      </div>
      <div
        className=" invisible lg:visible w-full 
            bg-center
            bg-[url('/images/ads.png')]
            bg-cover"
      ></div>
    </section>
  );
}
