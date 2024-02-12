// import { useState } from 'react'
import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';

export default function App() {
  return (
    <>
      <main>
        <nav>
          <img
            className="gdp-logo"
            src="https://gpdgroup.com/wp-content/themes/premise/img/gpd-logo.png"
          />
          <GiHamburgerMenu className="gi-hamburger-menu" />
        </nav>

        <div className="main--top--text--wrapper--outer">
          <div className="main--top--text--wrapper">
            <div className="redifining--wrapper">
              <div className="redifining--text">Redifining The Industry</div>
              <div className="transforming--text">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div className="see--how--wrapper">
              <div className="see--how--wrapper">See How</div>
              <IoIosArrowDown className="ios-arrow-down" />
            </div>
          </div>
        </div>

        <div className="main--bottom--wrapper--outer">
          <div className="main--bottom--wrapper">
            <div className="main--bottom--text--wrapper">
              <div>
                <h1>
                  This is a remake of the original GPD Group landing page.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident laudantium officia dolorum qui numquam amet rerum
                  dolor aut eius corrupti nam minima eos facere illo, omnis
                  tempore architecto quibusdam libero?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veniam saepe sapiente repudiandae vel odio, sequi dicta quod
                  error possimus ea distinctio, ullam, laudantium itaque
                  dolorem. Unde, eaque eum repellendus aliquid totam deleniti!
                  In beatae nemo, reprehenderit debitis eaque, fugit dolor
                  cupiditate sunt velit illum dicta ex corrupti itaque officiis!
                  Fugiat.
                </p>
                <button className="learn-btn">
                  Learn Why We're Different.
                </button>
              </div>
              <div className='right-img'></div>
            </div>
            <div className="main--bottom--flex--group">
              <div>
                <div>700 +</div>
                <div>Team Members</div>
              </div>
              <div>
                <div>150 +</div>
                <div>Service Offerings</div>
              </div>
              <div>
                <div>60 +</div>
                <div>Years Of Experience</div>
              </div>
              <div>
                <div>13 +</div>
                <div>Office Locations</div>
              </div>
              <div>
                <div>1</div>
                <div>Integrated Source</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
