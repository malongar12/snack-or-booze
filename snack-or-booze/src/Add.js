import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SnackOrBoozeApi from "./Api";
import { myContext } from "./context/contextProvider";



let AddItem = () => {
 const [Name, setName] = useState("");
 const [description, setDescription] = useState("");
 const [recipe, setRecipe] = useState("");
 const [serve, setServe] = useState("");
 const [item, setItem] = useState("");
const [error, setError] = useState("")
 let navigate =  useNavigate();
const {setDrinks, setSnacks} = useContext(myContext)

  const addItem = async(e)=> {
    e.preventDefault();
  

   try {

    let response =  await axios.post(`http://localhost:5000/${item}`, {
      id: Name,
      name: Name,
      description: description,
      recipe: recipe,
      serve: serve
    })
   
    if (response.status === 201) {
      
      const newItem = response.data;
      if (item === "drinks") {
        setDrinks((prevDrinks) => [...prevDrinks, newItem]);
      } else if (item === "snacks") {
        setSnacks((prevSnacks) => [...prevSnacks, newItem]);
      }
      navigate("/");
    } else {
      setError(`Failed to add ${Name}`);
    }
    
   } catch (error) {
    console.log(error)
   }

    

  }

  return (
    <div className="add_item">
      <form onSubmit={addItem}>
        <h3>Add Item</h3>
        <h6>{error}</h6>
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
