import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { TbShoppingBag } from "react-icons/tb";
const ShopingCard = () => {
  return (
    <>
      <div className="shopping-cart d-flex align-items-center">
        <div className="d-flex align-items-center shop">
          <TbShoppingBag size={30} />
          <span className="shop-count d-flex align-items-center justify-content-center">
            99
          </span>
        </div>
        <FaRegEnvelope size={30} />
      </div>
    </>
  );
};

export default ShopingCard;
