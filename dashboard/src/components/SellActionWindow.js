import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext"; 
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const { closeSellWindow } = useContext(GeneralContext);
    const [stockQuantity, setStockQuantity] = useState(1);
    const stockName = uid;

    const handleSellClick = () => {
        axios.post("https://stocksphere-backend-nhsr.onrender.com/newOrder", {
            name: stockName,
            qty: stockQuantity,
            mode: "SELL", 
        });

        closeSellWindow();
    };

    const handleCancelClick = () => {
        closeSellWindow();
    };

    return (
        <div className="container" id="sell-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <div>
                    <Link 
                        className="btn btn-red" 
                        onClick={handleSellClick}
                        style={{ backgroundColor: '#dc3545', color: 'white' }}
                    >
                        Sell
                    </Link>
                    <Link 
                        to="" 
                        className="btn btn-grey" 
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;