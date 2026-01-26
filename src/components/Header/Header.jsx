import './Header.css';
import logo from "../../assets/Logo.png";


function Header() {
    return (
        <header className="header">
            <div className="container">
            <img src={logo} alt="This is our logo!" />
            <h1>RED PC</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="nav">Home</a></li>
                    <li><a href="nav">Products</a></li>
                    <li><a href="nav">About</a></li>
                    <li><a href="nav">Contacts</a></li>
                </ul>
            </nav>
        </header>
    );
}       
export default Header;