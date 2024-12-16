import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider =(props)=>{
    const currency = '؋';
    const delivery_fee = 10;
    
    const vlaue ={
        products
    }
    return (
        <ShopContext.Provider>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider