import React from 'react';
import './Footer.css';
import './MediaFooter.css';

const Footer = (props) => {

  const { FirstUl, FirstUl2, SecondUl, SecondUl2, ThirdUl } = props;
  return (
    <>
      <div className="footer-screen">
        <div className="foot-parent">
          <div className="foot-child">
            <div className="foot-child-1">
              <p>*Instant savings, otherwise referred to as instant cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms and conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings. <br /> <br />A subscription is required for Apple TV+.</p>
            </div>
            <div className="foot-child-2">
              <div className="foot-child-21">
                <div className="foot-child-21-1">
                  <span>Shop and Learn</span>
                  {FirstUl.map((item, index) => (
                    <a key={index}>{item}</a>
                  ))}
                </div>
                <div className="foot-child-21-2">
                  <span>Apple Wallet</span>
                  {FirstUl2.map((item, index) => (
                    <a key={index}>{item}</a>
                  ))}
                </div>
              </div>
              <div className="foot-child-22">
                <div className="foot-child-22-1">
                  <span>Account</span>
                  {SecondUl.map((item, index) => (
                    <a key={index}>{item}</a>
                  ))}
                </div>
                <div className="foot-child-22-2">
                  <span>Entertainment</span>
                  {SecondUl2.map((item, index) => (
                    <a key={index}>{item}</a>
                  ))}
                </div>
              </div>
              <div className="foot-child-23">
                <div className="foot-child-23-1">
                  <span>Apple Store</span>
                  {ThirdUl.map((item, index) => (
                    <a key={index}>{item}</a>
                  ))}
                </div>
              </div>
              <div className="foot-child-24">
                <div className="foot-child-24-1">
                  <span>Shop and Learn</span>
                  {FirstUl.map((item, index) => (
                    <a key={index}>{item}</a>
                  ))}
                </div>
                <div className="foot-child-24-2">
                  <span>Apple Wallet</span>
                  {FirstUl2.map((item, index) => (
                    <a key={index}>{item}</a>
                  ))}
                </div>
              </div>
            </div>
            <div className="foot-child-3">
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;