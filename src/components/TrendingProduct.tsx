import { settingsVertical } from "@/utils";
import { productsFashion } from "@/utils/data";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import ProductCarousel from "./UI/Carousel";
import ProductCardHorizontal from "./UI/ProductCardHorizontal";
type Props = {};

export default function TrendingProduct({}: Props) {
  const slider1 = useRef<any>(null);
  const slider2 = useRef<any>(null);
  const slider3 = useRef<any>(null);

  return (
    <section className="bg-white-50 -mx-8 md:-mx-[60px] px-8 md:px-[60px] py-[50px]">
      <div className="mb-8 px-[15px] py-[14px] border-2 border-black inline-block">
        <h2 className="text-3xl md:text-[34px]  leading-6 font-medium ">
          <span className="font-black	">Trending</span> Product{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[60px]">
        <div className="space-y-5">
          <div className="flex items-center justify-between ">
            <h2 className="text-[24px] leading-6 font-medium ">
              <span className="font-black	">Fashion</span> For Women{" "}
            </h2>
            <div className="ml-auto flex space-x-1">
              <button
                onClick={() => slider1.current.slickPrev()}
                className="hover:bg-black hover:text-white-900 rounded-full w-12 h-12 flex justify-center items-center"
              >
                <ArrowLongLeftIcon className=" w-7 " />
              </button>
              <button
                onClick={() => slider1.current.slickNext()}
                className="hover:bg-black hover:text-white-900 rounded-full w-12 h-12 flex justify-center items-center"
              >
                <ArrowLongRightIcon className=" w-7 " />
              </button>
            </div>
          </div>
          <ProductCarousel settings={settingsVertical} sliderRef={slider1}>
            {productsFashion.map((product, index) => (
              <ProductCardHorizontal key={index} product={product} />
            ))}
          </ProductCarousel>
          <button className="bg-black rounded  text-sm leading-[15px] font-bold uppercase text-white-900 w-full py-[17px]">
            View All
          </button>
        </div>
        <div className="space-y-5">
          <div className="flex items-center justify-between ">
            <h2 className="text-[24px] leading-6 font-medium ">
              <span className="font-black	">Food</span> For Health{" "}
            </h2>
            <div className="ml-auto flex space-x-1">
              <button
                onClick={() => slider2.current.slickPrev()}
                className="hover:bg-black hover:text-white-900 rounded-full w-12 h-12 flex justify-center items-center"
              >
                <ArrowLongLeftIcon className=" w-7 " />
              </button>
              <button
                onClick={() => slider2.current.slickNext()}
                className="hover:bg-black hover:text-white-900 rounded-full w-12 h-12 flex justify-center items-center"
              >
                <ArrowLongRightIcon className=" w-7 " />
              </button>
            </div>
          </div>
          <ProductCarousel settings={settingsVertical} sliderRef={slider2}>
            {productsFashion.map((product, index) => (
              <ProductCardHorizontal key={index} product={product} />
            ))}
          </ProductCarousel>
          <button className="bg-black rounded  text-sm leading-[15px] font-bold uppercase text-white-900 w-full py-[17px]">
            View All
          </button>
        </div>
        <div className="space-y-5">
          <div className="flex items-center justify-between ">
            <h2 className="text-[24px] leading-6 font-medium ">
              <span className="font-black	">Cosmetics</span> For Winter{" "}
            </h2>
            <div className="ml-auto flex space-x-1">
              <button
                onClick={() => slider3.current.slickPrev()}
                className="hover:bg-black hover:text-white-900 rounded-full w-12 h-12 flex justify-center items-center"
              >
                <ArrowLongLeftIcon className=" w-7 " />
              </button>
              <button
                onClick={() => slider3.current.slickNext()}
                className="hover:bg-black hover:text-white-900 rounded-full w-12 h-12 flex justify-center items-center"
              >
                <ArrowLongRightIcon className=" w-7 " />
              </button>
            </div>
          </div>
          <ProductCarousel settings={settingsVertical} sliderRef={slider3}>
            {productsFashion.map((product, index) => (
              <ProductCardHorizontal key={index} product={product} />
            ))}
          </ProductCarousel>
          <button className="bg-black rounded  text-sm leading-[15px] font-bold uppercase text-white-900 w-full py-[17px]">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
