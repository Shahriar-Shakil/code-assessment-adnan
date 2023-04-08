import FlashSellProducts from "@/components/FlashSellProducts";
import TrendingProduct from "@/components/TrendingProduct";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="max-w-screen px-8 md:px-[60px] py-[100px] space-y-[50px]">
      <FlashSellProducts />
      <TrendingProduct />
    </main>
  );
}
