import React, { Component } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
class App extends Component {

  state={
    items:[],
    item:{
      name:"",
      number:"",
      index:0
    },
    editItem: false
  }

  handleChange=(e)=>{
    const {value,name} = e.target
    
    if([name] == "name"){
    this.setState((prev)=>({
        item:{
          [name]:value,
          number:this.state.item.number,
        }
        }))
    }
    else{
      this.setState((prev) => ({
        item: {
          [name]: value,
          name: this.state.item.name
        }
      }))

    }

  }


  handleSubmit = (e) => {
    const updatedItems = [...this.state.items,this.state.item ]
    e.preventDefault();

    this.setState((prev)=>({
      items: updatedItems,
      item: {
        name: "",
        number: "",
        index: prev.item.index + 1
      },
      editItem: false
    }))
    
  };
  
  deleteItem = (key)=>{
    
    //const updatedItems = this.state.items.splice({key},1)
    this.setState((prev)=>({
      items: this.state.items.splice({key},1)
    }))
    
  }
  
  // handleEdit = (key) => {
  //   const updataedItem = this.state.items.find(item => item.index === key);
  //   this.setState({
  //     item: updataedItem,
  //     items: this.state.items.splice({key},1)
  //   })
    
  // }

  handleEdit = key => {
    const filteredItems = this.state.items.filter((item) => item.index !== key);

    const selectedItem = this.state.items.find((item) => item.index === key);

    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem
    
      
    });
  };


  clearList = () => {
    this.setState({
      items: []
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Add Info</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <TodoList  list= {this.state.items} clearList = {this.clearList} deleteItem= {this.deleteItem} handleEdit ={this.handleEdit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;