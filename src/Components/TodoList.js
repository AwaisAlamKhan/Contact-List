import React from "react";
import TodoItem from "./TodoItem";
function TodoList(props){
  const {list, clearList,deleteItem,handleEdit } = props
    return (
      < div className = "card  ">
      <ul className="list-group  my-2 ">
        <h3 className="text-capitalize text-center">Contact list</h3>
              {list.map((item,index)=>
              <TodoItem item= {item} key={index} deleteItem={deleteItem} handleEdit={handleEdit}/>)
              }
                
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick = {clearList}
        >
          clear list
        </button>
      </ul>
      </div>
    );
  }



export default TodoList