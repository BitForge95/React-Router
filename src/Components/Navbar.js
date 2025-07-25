import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav data-bs-theme="dark" class="navbar navbar-expand-lg bg-body-tertiary bg" >
                <div class="container-fluid">
                    <h2>Navbar</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/user">User</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Navbar Trail
                    </span>
                    </div>
                </div>
                </nav>
        </>
    )
}

export default Navbar

