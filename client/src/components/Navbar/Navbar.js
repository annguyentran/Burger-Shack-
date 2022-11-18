// navigation bar with link to the menu, contact, homepage, startorder. 
import { logo } from "../../assets/logo.jpeg"
import {cartlogo} from "../../assets/cart.jpeg"
const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className="container">
            <div className="logo">
                <Image src={logo} alt="the burger shack" width="114" height="40" />
            </div>
            <div className="item">
                <ul className="list">
                    <Link href="/" passHref>
                        <li className="list-item">Homepage</li>
                    </Link>
                    <li className="list-item">Menu</li>
                    <li className="list-item">Blog</li>
                    <li className="list-item">Contact</li>
                </ul>
            </div>
            <Link href="/cart" passHref>
                <div className="item">
                    <div className="cart">
                        <Image src={cartlogo} alt="cart logo" width="30px" height="30px" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
