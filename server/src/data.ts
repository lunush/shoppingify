export interface Category {
  id: number;
  name: string;
}

export interface Item {
  id: number;
  name: string;
  category: string;
}

export const categories: Category[] = [
  { id: 1, name: "Fruit, Berries, and Vegetables" },
  { id: 2, name: "Meat and Fish" },
  { id: 3, name: "Pets" },
  { id: 4, name: "Beverages" },
  { id: 5, name: "Nutritional Supplements" },
  { id: 6, name: "Bread" },
];

export const items: Item[] = [
  {
    id: 1,
    name: "Avocado",
    category: "Fruit, Berries, and Vegetables",
  },
  {
    id: 2,
    name: "Bunch of carrots",
    category: "Fruit, Berries, and Vegetables",
  },
  {
    id: 3,
    name: "Chicken, 1KG",
    category: "Meat and Fish",
  },
  {
    id: 4,
    name: "Apple juice",
    category: "Beverages",
  },
  {
    id: 5,
    name: "Watermelon",
    category: "Fruit, Berries, and Vegetables",
  },
  {
    id: 6,
    name: "Chicken leg",
    category: "Meat and Fish",
  },
  {
    id: 7,
    name: "Mandarin Nadorcott",
    category: "Fruit, Berries, and Vegetables",
  },
  {
    id: 8,
    name: "Salmon",
    category: "Meat and Fish",
  },
  {
    id: 9,
    name: "Coffee",
    category: "Beverages",
  },
  {
    id: 10,
    name: "Dog Food",
    category: "Pets",
  },
  {
    id: 11,
    name: "Dog Water",
    category: "Fruit and vegetables",
  },
  {
    id: 12,
    name: "Cat Food",
    category: "Pets",
  },
  {
    id: 13,
    name: "Parrot Water",
    category: "Pets",
  },
  {
    id: 14,
    name: "Ice Tea",
    category: "Beverages",
  },
  {
    id: 15,
    name: "Milk Shake",
    category: "Beverages",
  },
  {
    id: 16,
    name: "Creatine Monohydrate, 1KG",
    category: "Nutritional Supplements",
  },
  {
    id: 17,
    name: "Whey Protein Powder, 5KG",
    category: "Nutritional Supplements",
  },
  {
    id: 18,
    name: "Omega 3, 250 Capsules",
    category: "Nutritional Supplements",
  },
  {
    id: 19,
    name: "Multivitamines, 90 Gammies",
    category: "Nutritional Supplements",
  },
  {
    id: 20,
    name: "That One Legal Powder",
    category: "Nutritional Supplements",
  },
];
