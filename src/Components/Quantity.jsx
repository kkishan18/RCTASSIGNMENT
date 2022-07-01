// import Button from "./Button"

function Quantity({
  qty,
  changeCount,
  id
}){
 return (
    <div style={{
        display:"flex",
        gap:"1rem",
        border:"1px solid red",
    }}>
   
   <button disabled={qty===0} onClick={() =>changeCount(id,-1)}>-</button>
   <div>
    <h4>{qty}</h4>
   </div>
   <button onClick={() =>changeCount(id,+1)}>+</button>
    </div>
 )   
}
export default Quantity