import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider =(props)=>{
    const currency = ' $ ';
    const delivery_fee = 10;
    const [search, setSeacrh] = useState('')
    const [showSearch, setShowSearch] = useState(true)
    
    const value = {
        products , currency, delivery_fee,
        search, setSeacrh, showSearch, setShowSearch
    }
    
    
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider