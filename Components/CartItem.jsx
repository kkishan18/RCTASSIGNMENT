import LabelPrice from "./LabelPrice"
import Quantity from "./Quantity"
// import Button from "./Button"

function CartItems({
    label,
    price,
    qty,
    id,
    handleChangeQty
}){
    return (
        <div style={{
            display:"flex",
            gap:"1rem",
            padding:"2rem",
            justifyContent:"center",
            alignContent:"center",
            border: "1px solid red",
            margin:"0.2rem",
        }}>
           <LabelPrice label={label} price={price}/>
           <Quantity id={id} qty={qty} changeCount ={handleChangeQty}/>
        </div>
    )
}
export default CartItems