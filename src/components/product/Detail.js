import React from "react";

const body = document.getElementsByTagName("body");

const Detail = ({
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
  },
  toggleDetailModal
}) => {
  const closeModal = () => {
    toggleDetailModal();
  };

  // console.log(body);
  // console.log(window);

  return (
    <div
      className="detail"
      style={{ height: `${body[0].offsetHeight + 16}px` }}
    >
      <div
        className="detail-wrapper"
        style={{ top: `${window.scrollY + 16}px` }}
      >
        <button
          className="close-detail-btn"
          onClick={() => {
            closeModal();
          }}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="detail-body">
          <div className="left">
            <img src={image_link} alt="detail" />
            <h2>{name}</h2>
            <p className="text">${price}</p>
            <p className="text">
              {category} | {product_type}
            </p>
          </div>
          <div className="right">
            <p>{description.substring(0, 250)}...</p>
            <a href={product_link}>Click for more details</a>
          </div>
        </div>
        <hr />
        <div className="colors">
          {product_colors.map((color, index) => (
            <span
              key={index}
              style={{ backgroundColor: color.hex_value }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
