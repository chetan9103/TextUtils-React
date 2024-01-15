import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Darkmode is enabled", "success");
      document.title = "TextUtils- dark mode";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode is enabled", "success");
      document.title = "TextUtils- home";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="textmodifier"
          About="AboutTextmodifier"
          theme={theme}
          toggleMode={toggleMode}
        />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element ={<About  theme={theme}/>} />
               */}
            
           
            {/* <Route exact path="/" element={  <TextForm
                showAlert={showAlert}
                heading="Enter any text to analyze"
                theme={theme}
              />} /> */}
              <TextForm
                showAlert={showAlert}
                heading="Enter any text to analyze"
                theme={theme}
              />
            
            
          {/* </Routes> */}
        </div>
      {/* </Router> */}
     
    </>
  );
}

export default App;
