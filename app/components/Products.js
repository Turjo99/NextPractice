import React from "react";
import SingleProduct from "@/app/components/SingleProduct";

const products = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-cache",
  });
  const products = await res.json();
  //   console.log(products);
  return (
    <div>
      <h1 className=" text-3xl text-center mb-5">All Products</h1>
      <div className="grid gap-4 grid-cols-3">
        {products.map((product) => (
          <SingleProduct product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default products;
