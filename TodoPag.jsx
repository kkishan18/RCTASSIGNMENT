// import { useEffect } from "react";
import { useState, useEffect } from "react";


function TodoPag(){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading]= useState(false);

    const getTodos = async (page=1) =>{
     try{
        setLoading(true)
      let data = await fetch(`https://jsonplaceholder.typicode.com/todos?&_page=${page}&_limit=10`)
      data = await data.json();
      console.log(data)
      setData(data);
      setLoading(false);
     }
     catch(err){
        setLoading(false);
     console.log(err)
     }
    }

//window.AddEvenlistener("load")
//Component Loads
//effects in Reacts
//Syncronise with your backend

useEffect(() =>{
    //alert("making request")
   getTodos(page)
},[page])

//useEffect it will runs once the component loads
    return (
        <div>
            <h1>Todos</h1>
            <button  onClick={() => setPage (page=>page-1)} disabled={page===1}> PREV </button>
            <span style={{padding:"0.5rem"}}>{page}</span>
            <button onClick={() => setPage (page=>page+1)} >Next</button>
            {/* <button onClick={getTodos}>Fetch</button> */}
            <div>
                {loading && <h3>Loading</h3>}
            </div>
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
export default TodoPag