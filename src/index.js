import ReactDOM from "react-dom/client";
import React from "react";
import MoreSettings from "./MoreSettings"
import MainSection from "./MainSection"
import Header from "./Header"
import "./style.css";
import "https://kit.fontawesome.com/224933734a.js";

function App(){
    return(
        <div className="container">
            <Header />
            <MainSection />
            <MoreSettings />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
    <App />
)