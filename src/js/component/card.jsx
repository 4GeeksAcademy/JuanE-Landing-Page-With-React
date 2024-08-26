import React from "react";
import PropTypes from "prop-types";


const Card = (prop) => {
    return (
      <>     
            <div className="card text-center justify-content-between card h-100">
                <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="Card image cap" />
                    <div className="card-body justify-content-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">{prop.text}</p>
                    </div>
               
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div> 
            </div>
        
    </>
        
    );
}

Card.ProtoTypes = {
    text: PropTypes.string
}

export default Card;