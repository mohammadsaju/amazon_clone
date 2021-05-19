import react , { useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { UseStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [ { user }, dispatch ] = UseStateValue();
  //useEfect is powerfull

  useEffect(() => {
    const unSuscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is log out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
    return () => {
      //any clean up operations go in here
      unSuscribe();
    }
  }, []);

  console.log('user >>> null' , user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          {/* this is the home component */}
          <Route exact path='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
