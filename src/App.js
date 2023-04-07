import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Register";


import { auth } from "./Firebase/firebase";

import "./App.css";
import { HomeScreen } from "./components1/HomeScreen/HomeScreen";
import { HomeScreen2 } from "./components2/HomeScreen2";
import App1 from "./App1";


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/HomeScreen" element={<HomeScreen />} />
          <Route path="/HomeScreen2" element={<HomeScreen2 />}/>
          <Route path="/MemoryGame" element={ <App1/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}
export default App;
