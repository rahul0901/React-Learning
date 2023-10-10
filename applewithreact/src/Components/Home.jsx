import React from 'react';
import './Home.css';
import './MediaHome.css';

const Home = () => {
  return (
    <>
      <div className="home-screen">
        <div className="offer-section">
          <span>Get up to ₹8000.00 instant savings on selected products with eligible HDFC Bank cards.*</span>
          <a>Shop now</a>
          <i class="fa-solid fa-greater-than"></i>
        </div>
        <div className="body-content-1 w-100 h-580 bg-img-css">
          <div className="bc-1-text flex">
            <h2>iPhone 15 Pro</h2>
            <h3>Titanium. So strong. So light. So Pro.</h3>
            <div className="bc-1-two-cta">
              <a>Learn more <i class="fa-solid fa-greater-than"></i></a>
              <a>Buy <i class="fa-solid fa-greater-than"></i></a>
            </div>
          </div>
        </div>

        <div className="body-content-2 w-100 h-580 bg-img-css">
          <div className="bc-2-text flex">
            <h2>iPhone 15 Pro</h2>
            <h3>New Camera. New Design. Newphoria.</h3>
            <div className="bc-2-two-cta">
              <a>Learn more <i class="fa-solid fa-greater-than"></i></a>
              <a>Buy <i class="fa-solid fa-greater-than"></i></a>
            </div>
          </div>
        </div>

        <div className="body-content-3 w-100 h-580 bg-img-css">
          <div className="bc-3-text flex">
            <h2><img src="https://www.apple.com/v/home/be/images/logos/apple-watch-series-9/hero_logo_apple_watch_series_9__eg5xcrxghuaa_small_2x.png" alt="" /></h2>
            <h3>Smarter. Brighter. Mightier.</h3>
            <div className="bc-3-two-cta">
              <a>Learn more <i class="fa-solid fa-greater-than"></i></a>
              <a>Buy <i class="fa-solid fa-greater-than"></i></a>
            </div>
          </div>
        </div>

        <div className="body-content-4">
          <div className="bc-41 bg-img-css">
            <div className="bc-4-text-1">
              <h2>iPad Pro</h2>
              <h3 className='flex'>Supercharged by <img src="https://www.apple.com/v/home/be/images/logos/ipad-pro/promo_m2_chip__enw2kz91lsuq_small_2x.png" alt="" /></h3>
              <div className="bc-4-two-cta-1 flex">
                <a>Learn more <i class="fa-solid fa-greater-than"></i></a>
                <a>Buy <i class="fa-solid fa-greater-than"></i></a>
              </div>
            </div>
          </div>
          <div className="bc-42 bg-img-css">
            <div className="bc-4-text-2 flex">
              <h2><img src="https://www.apple.com/v/home/be/images/logos/apple-watch-ultra-2/promo_logo_apple_watch_ultra2__ggg2x39rsvqu_large_2x.png" alt="" /></h2>
              <h3>Smarter. Brighter. Mightier.</h3>
              <div className="bc-4-two-cta-2">
                <a>Learn more <i class="fa-solid fa-greater-than"></i></a>
                <a>Buy <i class="fa-solid fa-greater-than"></i></a>
              </div>
            </div>
          </div>
          <div className="bc-43 bg-img-css">
            <div className="bc-4-text-3 flex">
              <h2>MacBook Air 15”</h2>
              <h3>Impressively big. Impossibly thin.</h3>
              <div className="bc-4-two-cta-3">
                <a>Learn more <i class="fa-solid fa-greater-than"></i></a>
                <a>Buy <i class="fa-solid fa-greater-than"></i></a>
              </div>
            </div>
          </div>
          <div className="bc-44 bg-img-css">
            <div className="bc-4-text-4 flex">
              <h2>AirPods Pro</h2>
              <h3>Adaptive Audio. Now playing.</h3>
              <div className="bc-4-two-cta-4">
                <a>Learn more <i class="fa-solid fa-greater-than"></i></a>
                <a>Buy <i class="fa-solid fa-greater-than"></i></a>
              </div>
            </div>
          </div>
          <div className="bc-45 bg-img-css">
            <div className="bc-4-text-5">
              <h2><img src="https://www.apple.com/v/home/be/images/logos/iphone-tradein/logo_tradein__d1fpktgipvki_large_2x.png" alt="" /></h2>
              <h3>Upgrade and save. It’s that easy.</h3>
              <div className="bc-4-two-cta-5">
                <a>See what your device is worth<i class="fa-solid fa-greater-than"></i></a>
              </div>
            </div>
          </div>
          <div className="bc-46 bg-img-css">
            <div className="bc-4-text-6">
              <h2>HomePod mini</h2>
              <div className="bc-4-two-cta-6">
                <a>Learn more <i class="fa-solid fa-greater-than"></i></a>
                <a>Buy <i class="fa-solid fa-greater-than"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;