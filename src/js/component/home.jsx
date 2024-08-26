import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import ContainerCard from "./containercard";
import Footer from "./footer";

//create your first component
const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Jumbotron></Jumbotron>
            <ContainerCard></ContainerCard>
            <Footer></Footer>
  
        </>
    );
};

export default Home;