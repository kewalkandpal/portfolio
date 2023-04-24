import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './Stateprovider';
function Header() {
    const [{ bascket }] = useGlobalContext();
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="header_logo" />
            </Link>
            <div className="header_search">
                <i className="fa fa-search header_search_icon" aria-hidden="true"></i>
                <input className="header_input" type="text" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">kewal</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/cart">
                    <div className="header__optionBasket">
                        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                        <span className="header__optionLineTwo header__basketCount">
                            {bascket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Header;