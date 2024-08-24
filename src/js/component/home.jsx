import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Jumbotron></Jumbotron>
            <Card></Card>
           <Footer></Footer>
  
        </>
    );
};

export default Home;