"use client";
import { Product } from "./common";
import HomeAHero from "./home/Hero";
import HomeAProcess from "./home/Process";
import HomeBrewing from "./home/Brewing";
import HomeACollection from "./home/Collection";
import { HomeAGoods } from "./home/Goods";
import { HomeFaq } from "./home/Faq";
import { Newsletter } from "./home/Newsletter";
export { HomeFaq } from "./home/Faq";
export { Newsletter } from "./home/Newsletter";

export const HomePage = ({
  go,
  heroSize,
  onAddToCart,
}: {
  go?: (page: string, payload?: Product) => void;
  heroSize?: number;
  onAddToCart?: (p: Product, qty: number) => void;
}) => (
  <>
    <HomeAHero heroSize={heroSize} />
    <HomeAProcess />
    <HomeBrewing />
    <HomeACollection go={go} onAddToCart={onAddToCart} />
    <HomeAGoods onAddToCart={onAddToCart} />
    <HomeFaq go={go} />
    <Newsletter />
  </>
);
