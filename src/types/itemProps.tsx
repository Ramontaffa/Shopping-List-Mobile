// units of measurement
export type Unit = "UN" | "KG" | "L" | "PCT";

// valid categories (based on your code)
export type Category = "fruta" | "padaria" | "legume" | "bebida" | "carne" | string;

// main interface for shopping item properties
export interface ShoppingItemProps {
  id: string;
  name: string;
  quantity: string;
  unit: Unit;
  category: Category;
  isCompleted: boolean;
}

export type NewShoppingItem = Omit<ShoppingItemProps, "id" | "isCompleted">;