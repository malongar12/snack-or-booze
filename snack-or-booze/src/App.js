import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, useParams, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import AddItem from "./Add";
import { myContext } from "./context/contextProvider";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const {setDrinks, drinks, snacks, setSnacks} = useContext(myContext)
 
 useEffect(()=> {


  const fetchSnacksAndDrinks = async ()=>{
    setIsLoading(true)
   try {
    
    const snacks = await SnackOrBoozeApi.getSnacks();
    const drinks = await SnackOrBoozeApi.getDrinks();
    setSnacks(snacks)
    setDrinks(drinks)
   } catch (error) {
    console.log(error)
   }finally{
    setIsLoading(false)
   }
  };
  fetchSnacksAndDrinks();
 },[])

 
  if (isLoading) {
    return <p>Loading....</p>;
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
        <Routes>
            <Route exact path="/" element={<Home   drinks={drinks} snacks={snacks}/>} />
             

            <Route path="/add/item" cantFind="/add" element={<AddItem/>}  />
            

            <Route exact path="/snacks"  element={<Menu items={snacks} title="Snacks" />}  />
              
  

            <Route path="/drinks" element={<Menu items={drinks} title="Drinks" />}/>
              
      


            <Route exact path="/item/:id"  element={  <Snack items={[...drinks, ...snacks]} />} />
          

       

            



            <Route path="/*" element ={ <p>Hmmm. I can't seem to find what you want.</p>} />
             
     
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
