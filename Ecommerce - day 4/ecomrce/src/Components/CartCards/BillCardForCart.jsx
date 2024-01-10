import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { AioutlineMinus } from "react-icons/ai";
import { calculatePrice, discountPrice } from "./CardUtils";
import { useFilter } from "../../Context";

export const BillCardForCart = () => {
  const { state } = useFilter();
  const { cartList } = state;
  let price = calculatePrice(cartList) ?? 0;
  let discountObj = discountPrice(cartList) ?? 0;
  return (
    <>
      {cartList.length > 0 && (
        <div className="text-card">
          <div className="text-card-section-one">
            <h3 className="margin-top-bottom-zero">Price Details</h3>
            <hr className="line-seprate" />
            <p className="text-card-item flex">
              <span className="margin-left">Price</span>
              <span>{price}</span>
            </p>
            <p className="text-card-item flex">
              <span className="margin-left">Discount</span>
              <span>
                <AioutlineMinus /> <FaRupeeSign />
                {Math.round(discountObj.discountedPrice)}
              </span>
            </p>
            <p className="text-card-item flex">
              <span className="margin-left">Delivery charges</span>
              <span>
                <FaRupeeSign />
                199
              </span>
            </p>
            <hr className="line-seprate" />
            <p>
              You have saved <FaRupeeSign />
              {Math.round(discountObj.discountedPrice)} on this purchase.
            </p>
          </div>
          <div className="text-card-section-two flex">
            <button className="primary-btn-lg">Place Order</button>
          </div>
        </div>
      )}
    </>
  );
};
