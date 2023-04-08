import Image from "next/image";
import { Inter } from "next/font/google";
import ProductCardVertical from "@/components/UI/ProductCardVertical";
import ProductCardHorizontal from "@/components/UI/ProductCardHorizontal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="max-w-screen px-[60px] py-[100px] space-y-10">
      <ProductCardVertical />
      <ProductCardHorizontal />
    </main>
  );
}
