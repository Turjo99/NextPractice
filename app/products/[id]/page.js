import React from "react";
import getSingleProducts from "../../utils/getSingleProduct";

const ProductDetail = async ({ params }) => {
  const product = await getSingleProducts(params.id);
  console.log(product);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={`https://i.dummyjson.com/data/products/${product.id}/3.jpg`}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
