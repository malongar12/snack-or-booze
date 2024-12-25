import React, { useState, useEffect } from "react";
import { BrowserRouter, useParams } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import AddItem from "./Add";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
 
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    const drinks = async () => {
      let result = await SnackOrBoozeApi.getDrinks();
      setDrinks(result);
    };
    drinks();
  }, []);

 
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/add/item" cantFind="/add">
              <AddItem />
            </Route>

            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>

            <Route path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>


            <Route exact path="/item/:id">
            <Snack items={[...drinks, ...snacks]} />

            </Route>

            



            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
