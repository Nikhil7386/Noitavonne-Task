import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Navbar() {

    const count = useSelector((state) => state.cart)
    console.log(count);

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid">
                    <Link to={"/"}>
                        <img style={{ width: "65px" }} src={require("../assets/images/brand.png")} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <h4>Trends Mens Wear</h4>
                            
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/about"} class="nav-link" >About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/product"} class="nav-link">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/contact"} class="nav-link" >Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/cart"} class="nav-link" ><i class="fa-solid fa-cart-shopping fa-xl"></i> <span>[{count.length}]</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}