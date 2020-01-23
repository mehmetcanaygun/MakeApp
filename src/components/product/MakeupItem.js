import React, { useState } from "react";
import Detail from "./Detail";

const body = document.getElementsByTagName("body");

const MakeupItem = ({
  product: {
    id,
    name,
    price,
    image_link,
    product_link,
    category,
    product_type,
    description,
    product_colors
  }
}) => {
  const [modal, setModal] = useState(false);

  const toggleDetailModal = () => {
    if (modal === true) {
      setModal(false);
      body[0].style.overflowY = "visible";
    } else {
      setModal(true);
      body[0].style.overflowY = "hidden";
    }
  };

  let detail = {
    id,
    name,
    price,
    image_link,
    product_link,
    category,
    product_type,
    description,
    product_colors
  };

  return (
    <div className="makeup-item">
      <img src={image_link} alt="product" />
      <div className="body">
        <h5 className="title">{name}</h5>
        <p className="text">{price}</p>
        <p className="text">
          {category} | {product_type}
        </p>
        <button
          className="details-btn"
          onClick={() => {
            toggleDetailModal();
          }}
        >
          Details
        </button>
      </div>
      {modal && (
        <Detail product={detail} toggleDetailModal={toggleDetailModal} />
      )}
    </div>
  );
};

export default MakeupItem;
