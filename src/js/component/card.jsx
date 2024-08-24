import React from "react";

const Card = () => {
    return (
           
    <div className="container">
    <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col ml-3">
            <div className="card h-100">
                <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title d-md-flex justify-content-center">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                        of the card's content.</p>

                </div>
                <div className="p-3 mb-2 bg-light ">
                    <div className="d-grid gap-2 d-md-flex justify-content-center ">
                        <a href="#" className="btn btn-primary">Find Out More!</a>

                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title d-md-flex justify-content-center">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                        of the card's content.</p>

                </div>
                <div className="p-3 mb-2 bg-light ">
                    <div className="d-grid gap-2 d-md-flex justify-content-center ">
                        <a href="#" className="btn btn-primary">Find Out More!</a>

                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title d-md-flex justify-content-center">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                        of the card's content.</p>

                </div>
                <div className="p-3 mb-2 bg-light ">
                    <div className="d-grid gap-2 d-md-flex justify-content-center ">
                        <a href="#" className="btn btn-primary">Find Out More!</a>

                    </div>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="Card image cap" />
                <div className="card-body ">
                    <h5 className="card-title d-md-flex justify-content-center">Card title</h5>
                    <p className="card-text ">Some quick example text to build on the card title and make up the bulk
                        of the card's content.</p>
                </div>

                <div className="p-3 mb-2 bg-light">
                    <div className="d-grid gap-2 d-md-flex justify-content-center ">
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default Card;