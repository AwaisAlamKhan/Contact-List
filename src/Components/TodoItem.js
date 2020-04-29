import React  from "react";

 function TodoItem(props){
   const {item,key,deleteItem,handleEdit} = props
    return (
      < div className = "card card-body my-3" >
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
    <h6>{item.name}</h6>
        
        <div className="todo-icon">
          <span className="mx-2 text-success"  >
            <i className="fas fa-pen"   onClick={()=>handleEdit(key)}  />
          </span>
          <span className="mx-2 text-danger" >
            <i className="fas fa-trash"  onClick={()=>deleteItem(key)} />
          </span>
        </div>
      </li>
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
    <h6>{item.number}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" >
            <i className="fas fa-pen" onClick={()=>handleEdit(key)} />
          </span>
          <span className="mx-2 text-danger"  onClick={()=>deleteItem(key)} >
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>

      </div>
    );
  }

export default TodoItem