import React from "react";

function TodoInput(props) {
  const {item,handleSubmit,handleChange}= props

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}> 
          < div className = "input" >
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-dog" />
              </div>
            </div>
            <input type="text" className="form-control text-capitalize" placeholder="Add Name" name ='name' value={item.name} onChange={handleChange}/>
          
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-mobile" />
              </div>
            </div>
            <input type="text" className="form-control text-capitalize" placeholder="Add Number" name ='number' value={item.number} onChange={handleChange}/>
          </div>
          < button type = "submit" className = "btn btn-block btn-success mt-3" > Add Item</button>
        </form>
      </div>
    );
  }


export default TodoInput