import fs from "fs";
import path from "path";
import { PRODUCTS_DATA, CATEGORIES } from "./data/productsData.ts";

const exportData = () => {
  const data = {
    categories: CATEGORIES,
    products: PRODUCTS_DATA,
  };

  const targetPath = "../Eco Shine Bangladesh - Backend/src/static_data.json";
  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
  console.log("Static products and categories successfully written to backend JSON!");
};

exportData();
