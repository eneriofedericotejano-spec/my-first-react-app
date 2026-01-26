import "./Main.css";
import search from "../../assets/Search.png";
import cpu from "../../assets/CPU.png";
import ram from "../../assets/RAM.jpeg";
import motherboard from "../../assets/MB.png";
import sc from "../../assets/SC.png";
import psu from "../../assets/PSU.png";
import gc from "../../assets/GC.png";
import cart from "../../assets/shopping-cart.png";

function Main() {
  return (
    <main className="main-content">
      <div className="search-container">
        <img src={search} alt="Search Icon" className="search-icon" />
        <input
          type="text"
          className="search-bar"
          placeholder="Search for products"
        />
      </div>

      <div className="cards-container">
        <div className="card">
          <div className="image-card">
            <img src={cpu} alt="CPU" />
          </div>
          <div className="title">
          <h1>Intel Core i9-14900K (14th Gen)</h1>
          <h2>₱35,000</h2>
          </div>
          <div className="addCart">
            <button className="buttoncart">
              <img src={cart} alt="Cart Icon" className="add-icon" />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image-card">
            <img src={ram} alt="RAM" />
          </div>
          <h1>G.Skill Trident Z5 RGB DDR5-6000 (32GB)</h1>
          <h2>₱9,000</h2>
          <div className="addCart">
            <button className="buttoncart">
              <img src={cart} alt="Cart Icon" className="add-icon" />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image-card">
            <img src={motherboard} alt="Motherboard" />
          </div>
          <h1>ASUS ROG Strix Z790-E Gaming WiFi</h1>
          <h2>₱22,000</h2>
          <div className="addCart">
            <button className="buttoncart">
              <img src={cart} alt="Cart Icon" className="add-icon" />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image-card">
            <img src={sc} alt="System Case" />
          </div>
          <h1>NZXT H7 Flow</h1>
          <h2>₱6,000</h2>
          <div className="addCart">
            <button className="buttoncart">
              <img src={cart} alt="Cart Icon" className="add-icon" />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image-card">
            <img src={psu} alt="Power Supply Unit" />
          </div>
          <h1>Corsair RM850x (2021)</h1>
          <h2>₱7,500</h2>
          <div className="addCart">
            <button className="buttoncart">
              <img src={cart} alt="Cart Icon" className="add-icon" />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="card">
          <div className="image-card">
            <img src={gc} alt="Gaming Chair" />
          </div>
          <h1>Secretlab Titan Evo 2022</h1>
          <h2>₱25,000</h2>
          <div className="addCart">
            <button className="buttoncart">
              <img src={cart} alt="Cart Icon" className="add-icon" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
