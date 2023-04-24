import React from 'react'
import './Cart.css';
import Cartitems from './Cartitems';
import { useGlobalContext } from './Stateprovider';
import CurrencyFormat from 'react-currency-format';
import { getBascketTotal } from './Reducer';
function Cart() {
    const [{ bascket }] = useGlobalContext();
    return (
        <div className="cart">
            <div className="cart_left">
                <img className="cart_header_img" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="headerImg" />
                {
                    bascket?.length === 0 ? (
                        <div className="cart_empty">
                            <h2>Your shoping bascket is empty</h2>
                            <p>
                                you have no item in your bascket.
                            </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="cart_title">Your Shoping Bascket</h2>
                            {
                                bascket?.map((item, idx) => {
                                    return (
                                        <Cartitems
                                            key={idx}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                            image={item.image}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
            {
                bascket.length > 0 && (
                    <div className="cart_right">
                        <CurrencyFormat
                            renderText={(value) => (
                                <>
                                    <p>
                                        subtotal ({bascket.length} items) : <strong>{`${value}`}</strong>
                                    </p>
                                    <small><input type="checkbox" /> this order contains a gift</small>
                                </>
                            )}
                            decimalScale={2}
                            value={getBascketTotal(bascket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rs "}
                        />
                        <button>Proceed to checkout</button>
                    </div>
                )
            }
        </div>
    )
};

export default Cart;