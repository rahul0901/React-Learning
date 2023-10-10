import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="home-screen">
        <div className="offer-section">
          <span>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.*</span> 
          <a>Shop now</a>
          <i class="fa-solid fa-greater-than"></i>
        </div>
        <div className="body-content-1">
          <div className="bc-1-text">
              <h2>iPhone 15 Pro</h2>
              <h3>Titanium. So strong. So light. So Pro.</h3>
              <div className="bc-1-two-cta">
                <a>Learn more <i class="fa-solid fa-greater-than"></i></a>
                <a>Buy <i class="fa-solid fa-greater-than"></i></a>
              </div>
          </div>
        </div>

        <div className="body-content-2">
          <div className="bc-2-text">
              <h2>iPhone 15 Pro</h2>
              <h3>New Camera. New Design. Newphoria.</h3>
              <div className="bc-2-two-cta">
                <a>Learn more <i class="fa-solid fa-greater-than"></i></a>
                <a>Buy <i class="fa-solid fa-greater-than"></i></a>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;