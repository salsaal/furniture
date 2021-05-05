import furniture1 from "./assets/furniture1.jpg";
import furniture2 from "./assets/furniture2.jpg";
import furniture3 from "./assets/furniture3.jpg";
import furniture4 from "./assets/furniture4.jpg";
import furniture5 from "./assets/furniture5.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="furniture">
        <div className="imageside">
          <img className="dp" src={furniture3} alt=""></img>
          <div className="arrows">
            <span className="arrow"><i class="fas fa-arrow-left"></i></span>
            <span className="arrow right"><i class="fas fa-arrow-right"></i></span>
          </div>
          <div className="imagelist">
            <img src={furniture1}></img>
            <img src={furniture2}></img>
            <img src={furniture3}></img>
            <img src={furniture4}></img>
            <img src={furniture5}></img>
          </div>
        </div>
        {/* content side */}
        <div className="contentside">
          <h1>Upholstered Sofa</h1>
          <h4>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque diam nisl, pellentesque ac mattis nec, eleifend non
            orci. Nam iaculis, erat a commodo tincidunt, justo ex tincidunt sem.
          </p>
          <div className="stars">
            <svg
              width="20px"
              height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="svg-inline--fa fa-star fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#16EAA9 "
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
            <svg
              width="20px"
              height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="svg-inline--fa fa-star fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#16EAA9 "
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
            <svg
              width="20px"
              height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="svg-inline--fa fa-star fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#16EAA9 "
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
            <svg
              width="20px"
              height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="svg-inline--fa fa-star fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#16EAA9 "
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
            <svg
              width="20px"
              height="20px"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="svg-inline--fa fa-star fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="#16EAA9 "
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
          </div>
          <p className="review"><span>(5.0)</span> review based on 250</p>
          <p className="submit">Submit Review</p>
          <span className="rupees">$500</span>
          <p className="dispatch"><i class="fas fa-clock"></i>  Dispatched in 7 working days</p>
          <div className="buttons">
            <button className="cart">add to cart</button>
            <button>add to wishlist</button>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="item">
        <i class="far fa-money-bill-alt"></i>

          <div>
            <h4>Secure Payment</h4>
            <p>Dont't worry your money is in secure places</p>
          </div>
        </div>
        <div className="item">
        <i class="fas fa-truck-moving"></i>

          <div>
            <h4>Fast & free Delivery</h4>
            <p>Home Delivery $15 for free delivery order over $250</p>
          </div>
        </div>
        <div className="item">
        <i class="fas fa-box"></i>
          <div>
            <h4>Return Policy</h4>
            <p>No hassle return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
