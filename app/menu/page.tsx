"use client";

import React, { useState } from "react";
import { products } from "@/data/products";
import { ProductRow } from "@/components/product-row";
import { Button } from "@/components/ui/button";

const filterCategories = [
  { label: "ALL", value: "all" },
  { label: "RED VELVET", value: "red-velvet" },
  { label: "VANILLA", value: "vanilla" },
  { label: "UBE", value: "ube" },
  { label: "CHOCOLATE", value: "chocolate" },
];

export default function MenuPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProducts =
    selectedFilter === "all"
      ? products
      : products.filter((p) => p.slug === selectedFilter);

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Menu Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs tracking-[0.3em] text-[#C9AE9E] uppercase font-medium">
          CURATED DESSERT MENU
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#D8C6BA] font-light tracking-wide uppercase">
          THE POP CAN MENU
        </h1>
        <div className="flex items-center justify-center gap-3 my-2">
          <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
          <span className="text-[#C9AE9E] text-xs">✦</span>
          <div className="h-[1px] w-12 bg-[#D8C6BA]/30" />
        </div>
        <p className="font-sans-clean text-base text-[#B4A59D] font-light italic">
          "Choose your favorite indulgence."
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {filterCategories.map((cat) => {
          const isActive = selectedFilter === cat.value;
          return (
            <Button
              key={cat.value}
              variant={isActive ? "solid" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(cat.value)}
              className="text-[11px] tracking-[0.2em] px-5 py-2 transition-all duration-300"
            >
              {cat.label}
            </Button>
          );
        })}
      </div>

      {/* Editorial Menu List */}
      <div className="space-y-6">
        {filteredProducts.map((product) => (
          <ProductRow key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
