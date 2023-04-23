export type ProductCategories = {
  id: number;
  title?: string;
  slug?: string;
}[];

export type ProductColors = {
  id: number;
  title?: string;
}[];

export type ProductSizes = {
  id: number;
  title?: string;
}[];

export type ProductImages = {
  id: number;
  title?: string;
  src?: string;
  main?: boolean;
};

export type Product = {
  id: number;
  title?: string;
  rate?: number;
  price?: number;
  brand?: string;
  info?: string;
  description?: string;
  specifications?: string;
  inventory?: number;
  slug?: string;
  category: ProductCategories;
  colors: ProductColors;
  sizes: ProductSizes;
  images: ProductImages;
};
