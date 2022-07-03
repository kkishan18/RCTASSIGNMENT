// import { useEffect } from "react";
import { useState, useEffect } from "react";


function Todo(){
    const [data, setData] = useState([]);

    const getTodos = async () =>{
     try{
      let data = await fetch(`https://jsonplaceholder.typicode.com/todos?&_page=1&_limit=10`)
      data = await data.json();
      console.log(data)
      setData(data);
     }
     catch(err){
     console.log(err)
     }
    }

//window.AddEvenlistener("load")
//Component Loads
//effects in Reacts
//Syncronise with your backend

useEffect(() =>{
    //alert("making request")
   getTodos()
},[])

//useEffect it will runs once the component loads
    return (
        <div>
            <h1>Todos</h1>
            <button onClick={getTodos}>Fetch</button>
            <div>
                {
                    data.map(todo =>
                        <div style ={{display:"flex",gap:"1rem",margin:"0.5rem"}} key={todo.id}>
                            <div>{todo.id}</div>
                            <div>{todo.title}</div>
                            <div>{todo.status?"DONE":"NOT DONE"}</div>
                            </div>
                        )
                }
            </div>
        </div>
    )
}
export default Todo