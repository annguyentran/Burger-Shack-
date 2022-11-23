// navigation bar with link to the menu, contact, homepage, startorder. 
import  logo  from "../../assets/logo.jpeg"
import cartlogo from "../../assets/cart.png"
// import { Link } from 'react-router-dom'
// import {useSelector} from "react-redux"
const Navbar = () => {
    // const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className="container">
            <div className="logo">
               <img src={logo} alt="the burger shack" width="114" height="40" />
            </div>
            <div className="item">
                <ul className="list">
                    <a href="/">
                        <li className="list-item">Homepage</li>
                    </a>
                    <a href="/dashboard">
                        <li className="list-item">Dashboard</li>
                    </a>
                    <li className="list-item">Menu</li>
                    <li className="list-item">Blog</li>
                    <li className="list-item">Contact</li>
                </ul>
            </div>
            <a href="/cart" passHref>
                <div className="item">
                    <div className="cart">
                        <img src={cartlogo} alt="cart logo" width="30px" height="30px" />
                        <div className={""}>{"test 10"}</div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Navbar;
