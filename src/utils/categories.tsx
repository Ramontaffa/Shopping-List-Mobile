import { LucideIcon, Apple, Sandwich, Carrot, Milk, Beef } from 'lucide-react-native';

export interface CategoryData {
  value: string;
  label: string;
  icon: LucideIcon;
  colorClass: string;
}

// List of categories with their respective icons and color classes
export const categories: CategoryData[] = [
  {
    value: "Fruta",
    label: "Fruta",
    icon: Apple,
    colorClass: "bg-red-700/50 text-red-300",
  },
  {
    value: "Fadaria",
    label: "Padaria",
    icon: Sandwich,
    colorClass: "bg-yellow-600/50 text-yellow-300",
  },
  {
    value: "Legume",
    label: "Legume",
    icon: Carrot,
    colorClass: "bg-green-700/50 text-green-300",
  },
  {
    value: "Bebida",
    label: "Bebida",
    icon: Milk,
    colorClass: "bg-blue-700/50 text-blue-300",
  },
  {
    value: "Carne",
    label: "Carne",
    icon: Beef,
    colorClass: "bg-pink-700/50 text-pink-300",
  },
];