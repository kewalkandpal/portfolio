import React from 'react';
import './Product.css';
import { useGlobalContext } from './Stateprovider';
function Product({ id, title, price, rating, image }) {
    const [, dispatch] = useGlobalContext();
    const addToBascket = () => {
        dispatch(
            {
                type: "ADD_TO_BASCKET",
                items: { id, title, price, rating, image }
            }
        )
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>Rs</small>
                    <strong> {price} /-</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_, i) => {
                            return (
                                <p key={i}>⭐</p>
                            )
                        })
                    }
                </div>
            </div>
            <img src={image} alt="product_img" />
            <button onClick={addToBascket}>Add to Bascket</button>
        </div>
    )
}
export default Product;