import React from "react";

const singleProduct = ({ product }) => {
  const { id, title, description, price, images } = product;
  const img = images[0];
  //   console.log(img);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className=" h-32" src={img} alt="" srcset="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title}
          <div className="badge badge-secondary">${price}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Update</button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default singleProduct;
