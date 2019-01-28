import React, { Component } from 'react';
import './App.css';
import Logo from './NCR-Resources/Test/elements/logo.png';
import GoMobile from './NCR-Resources/Test/elements/icon_mobile.png';
import Hand from './NCR-Resources/Test/elements/icon_hand-money.png';
import Auto from './NCR-Resources/Test/elements/icon_auto.png';
import Hamburger from './NCR-Resources/Test/elements/icon_hamburger.png';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="logo">
            <img src={Logo} alt="main-logo"/>
          </div>
          <div class="nav-bar">
              <a href="#" className="menu">
                <p>Menu</p><img src={Hamburger} id="hamburger" alt="menu" onClick={this.handleClick}/>
              </a>
              <div className="navbar-links">
                <a href="#">Contract</a>
                <a href="#">Rates</a>
                <a href="#">Loans</a>
              </div>
          </div>
        </header>

        <body>
        <div class="tiles">

          <div className="mobile_tile1">
            <img src={GoMobile} alt="goMobile" />
            <div className="content-tile">
              <h2 className="title-tile">Go Mobile</h2>
              <p>Download the App</p>
            </div>
          </div>

          <div className="mobile_tile2">
            <img src={Hand} alt="hand" />
            <div className="content-tile">
              <h2 className="title-tile">Refer Someone!</h2>
              <p>You'll each get $25!</p>
            </div>
          </div>

          <div className="mobile_tile3">
            <img src={Auto} alt="auto" />
            <div className="content-tile">
              <h2 className="title-tile">Refinancing</h2>
              <p>Get a low rate!</p>
            </div>
          </div>

        </div>


        </body>
      </div>
    );
  }
}

export default App;
