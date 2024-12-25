import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

let AddItem = () => {
 const [Name, setName] = useState("");
 const [description, setDescription] = useState("");
 const [recipe, setRecipe] = useState("");
 const [serve, setServe] = useState("");
 const [item, setItem] = useState("");



  const addItem = async(e)=> {
    e.preventDefault();

   let response =  await axios.post(`http://localhost:5000/${item}`, {
      id: Name,
      name: Name,
      description: description,
      recipe: recipe,
      serve: serve
    })

    if(response.status === 200)
      <Redirect to="/" />
      

    

  }

  return (
    <div className="add_item">
      <form onSubmit={addItem}>
        <h3>Add Item</h3>
        <div className="input-field"> 
          <select onChange={e => setItem(e.target.value)}>
            <option>select type</option>
            <option>snacks</option>
            <option>drinks</option>
          </select>
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" onChange={e => setName(e.target.value)}></input>
        
        <label htmlFor="description">description</label>
        <input type="text" id="description"  onChange={e => setDescription(e.target.value)}/>
        <label htmlFor="recipe">recipe</label>
        <input type="text" id="recipe"    onChange={e => setRecipe(e.target.value)}></input>
        
        <label htmlFor="serve">serve</label>
        <input type="text" id="serve"    onChange={e => setServe(e.target.value)}></input>
        
        </div>
        <button>Add {item}</button>
      </form>
    </div>
  );
};

export default AddItem;
