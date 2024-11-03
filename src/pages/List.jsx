import { useState } from "react";
import Header from "../components/Header";
import Item from "../components/Item"
import Products from "../products.json";

function List() {
    return <>
        <Header/>
        <div className="product-list">
            <div className="product-list-wrapper">
                <h3>Svi proizvodi <span className="number-of-items">{Products.length ? Products.length+' proizvoda' : ''}</span></h3>
                <div className="items">
                    {Products.map((val, index) => <Item 
                        key={index} item={{"product": val, "index": index}}
                    />)}
                </div>
            </div>
        </div>
    </>
}

export default List;