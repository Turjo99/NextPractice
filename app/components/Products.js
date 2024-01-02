import React from "react";
import SingleProduct from "@/app/components/SingleProduct";
import Link from "next/link";

const products = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-cache",
  });
  const products = await res.json();
  //   console.log(products);
  return (
    <div>
      <h1 className=" text-3xl text-center mb-5">Products</h1>
      <div className="grid gap-4 grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <SingleProduct product={product}></SingleProduct>
        ))}
      </div>
      <Link
        className=" flex justify-center"
        href="http://localhost:3000/products"
      >
        <button className="btn btn-secondary mt-4">Show all</button>
      </Link>
    </div>
  );
};

export default products;
