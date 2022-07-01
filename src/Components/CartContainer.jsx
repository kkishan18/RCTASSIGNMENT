import { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";
// import Button from "./Button";

const initData = [
    {
        id:1,
        product_name: "Noodles",
        price:"30",
        qty:1,
    },
    {
        id:2,
        product_name: "Biriyani",
        price:"90",
        qty:2,
    },
    {
        id:3,
        product_name: "Chips",
        price:"10",
        qty:3,
    }
]

function calculateTotal(products){ 

return products.reduce((acc,c) => acc+ (c.qty * c.price), 0)

}

function CartContainer(){
 const [data, setData] = useState(initData)

const handleChangeQty = (id, amount) =>{
 let updatedData = data.map ( item => {
    if(item.id === id){
        return {
        ...item,
        qty: item.qty + amount
        }
    }else{
        return item
    }
 })
 setData(updatedData)
}


    return (
        <div style={{
            border:"2px solid red",
            width:"20%",
            margin:"auto"
        }}>
         {
            data.map( item =>
                <CartItem 
                key={item.id}
                id={item.id}
                label={item.product_name}
                 qty={item.qty}
                 price={item.price} 
                 handleChangeQty={handleChangeQty}
                 />
                )
         }
            {/* <CartItem/>
            <CartItem/>
            <CartItem/>
             */}
         <Total total={calculateTotal(data)}/>
        </div>
    )
}

export default CartContainer