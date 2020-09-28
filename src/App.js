import React from 'react';

import {Header} from './components';
import {Home, Support} from './pages';
import { Route, Link } from 'react-router-dom';

function App () {

  return(
    <div className="wrapper">
      <Header/>
      <div className='main'>
        <div className='menu'>
          <ul className='navList'>
            <li className='navList-item'>
              <Link to="/" className='navList-item-link'>
                <i className="fa fa-tachometer" aria-hidden="true"></i>
                <span>Dashboard</span>  
              </Link>
            </li>
            <li className='navList-item'>
              <Link to="/support" className='navList-item-link'>
                <i className="fa fa-life-ring" aria-hidden="true"></i>
                <span>Support</span> 
              </Link>
            </li>
          </ul>
        </div>
        <div className='content'>
          <Route path="/" component={Home} exact  />
          <Route path="/suport" component={Support} exact />
        </div>
      </div>
    </div>
  )
}
export default App;
