import React from "react";
import getAllProducts from "@/app/utils/getAllProducts";
import SingleProduct from "@/app/components/SingleProduct";

const ProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="">
      <h1 className=" text-3xl text-center mb-5"> All Products</h1>
      <div className="grid gap-4 grid-cols-3">
        {products.map((product) => (
          <SingleProduct product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
