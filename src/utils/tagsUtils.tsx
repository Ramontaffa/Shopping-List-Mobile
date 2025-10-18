import React from "react";
import { Category } from "../types/itemProps";
import { categories } from "./categories";

// find the category data and return its color class
export function getTagColor(category: Category): string {
  const data = categories.find(cat => cat.value === category);
  return data ? data.colorClass : "bg-gray-700/50 text-gray-300";
}

// return the icon component for the given category
export function TagIcon({ category, className }: { category: Category, className?: string }) {
  const data = categories.find(cat => cat.value === category);
  const IconComponent = data ? data.icon : categories[0].icon;
  
  return <IconComponent className={className} />;
}