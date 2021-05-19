import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { UseStateValue } from "./StateProvider";
import { auth } from "./firebase";


const Header = () => {
  const [{basket,user}] = UseStateValue();
  const logout = () => {
    if(user) {
      auth.signOut();
    }
  }
  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* search bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3 links */}
      <div className='header__nav'>
          {/* 1st link */}
          <Link to={!user && '/login'} className='header__link'>
          <div onClick={logout} className='header__option'>
              <span className='header__optionLineOne'>Hellow,{ user?.email }</span>
              <span className='header__optionLineTwo'> { user ? 'sign out' : 'sign in' }</span>
          </div>
          </Link>
          {/* 2nd link */}
          <Link to='/' className='header__link'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& order</span>
          </div>
          </Link>
          {/* 3rd link */}
          <Link to='/' className='header__link'>
          <div className='header__option'>
              <span className='header__optionLineOne'>Your</span>
              <span className='header__optionLineTwo'>prime</span>
          </div>
          </Link>
          {/* 4th link */}
          <Link to='/checkout' className='header__link'>
              <div className='header__optionBasket'>
                  {/* shopping basket icon */}
                  <ShoppingBasketIcon/>
                  {/* number of items in the basket */}
                  <span className='header__optionLineTwo header__basketCount'>{ basket?.length }</span>
              </div>
          </Link>
      </div>
      {/* busket icon with number */}
    </nav>
  );
};

export default Header;
