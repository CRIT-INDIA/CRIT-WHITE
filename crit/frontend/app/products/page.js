'use client';
import SAPProductPage from "./components/product_hero";
import SAPProductsInfo from './components/p_info';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#fff5f5]">
      <div className="relative pt-10">   
        <SAPProductPage />
        <SAPProductsInfo />
      </div>
    </div>
  );
}