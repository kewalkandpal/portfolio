import React from "react";
import "./Cartitems.css";
import { useGlobalContext } from "./Stateprovider";
function Cartitems({ id, title, price, rating, image }) {
    const [, dispatch] = useGlobalContext();
    const removeBascket = () => {
        dispatch(
            {
                type: "REMOVE_BASCKET",
                payload: id
            }
        )
    };
    return (
        <div className="cart_items">
            <img className="cart_item_img" src={image} alt="cartItem_img" />
            <div className="cart_items_info">
                <p className="cartItem_title">{title}</p>
                <p className="cartItem_price">
                    <small>Rs</small>
                    <strong> {price} /-</strong>
                </p>
                <div className="cartItem_rating">
                    {
                        Array(rating).fill().map((_, idx) => {
                            return (
                                <p key={idx}>⭐</p>
                            )
                        })
                    }
                </div>
                <button onClick={removeBascket}>Remove from bascket</button>
            </div>
        </div>
    )
};

export default Cartitems;