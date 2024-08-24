import React from "react";



//create your first component
const Home = () => {
return (
<>
    <div className="p-3 mb-2 bg-secondary ">
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
                <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                <div className="navbar-nav">
                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    <a className="nav-link text-white" href="#">About</a>
                    <a className="nav-link text-white" href="#">Services</a>
                    <a className="nav-link text-white" href="#">Contact</a>
                </div>
            </div>
        </nav>
    </div>
        <div className="container py-5">
    <div className="p-5 mb-4 bg-light rounded-3 ">
            <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
            <p className="col-md-8 fs-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit exercitationem obcaecati nisi non blanditiis itaque maxime ex sequi, voluptate corrupti temporibus, impedit ipsum, accusantium delectus odio? Numquam hic esse voluptates!</p>
            <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
        </div>
    </div>
    <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col ml-3">
                <div className="card h-100">
                    <img className="card-img-top" src="https://via.placeholder.com/700x400" alt="Card image cap" />
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
                    <img className="card-img-top" src="https://via.placeholder.com/700x400" alt="Card image cap" />
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
                    <img className="card-img-top" src="https://via.placeholder.com/700x400" alt="Card image cap" />
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
                    <img className="card-img-top" src="https://via.placeholder.com/700x400" alt="Card image cap" />
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
    <div className="footer container.lg text-center mt-3">
        <div className="p-3 mb-2 mb-2 bg-secondary text-white">
            <p>Copyrigth @ Your Website 2024</p>
        </div>
    </div>

</>
);
};

export default Home;