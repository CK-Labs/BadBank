import React from 'react';
import Home from './Components/Home';
import CustomNavBar from './Components/NavBar';
import CreateAccount from './Components/CreateAccount';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import AllData from './Components/AllData';
import { UserContext } from './Components/Context';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
      <>
      <div className="container">
          <CustomNavBar />
          {/* <div className="container d-flex centerContent"> */}
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/CreateAccount/" element={<CreateAccount/>} />
                <Route path="/Deposit/" element={<Deposit/>} />
                <Route path="/Withdraw/" element={<Withdraw/>} />
                <Route path="/AllData/" element={<AllData/>} />
              </Routes>
            {/* </div> */}
      </div>
    </>
  );
}

export default App;

