import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-base-100 drop-shadow'>
    <div className="navbar  m-auto w-10/12">
      <div className="navbar-start sm:navbar-end text-3xl sm:block font-semibold md:block">Dream PhotoGraphy</div>  
  <div className="navbar-start md:hidden">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>

  </div>

  <div className="navbar-end sm:hidden hidden md:block">
    <ul className='text-xl'>
       <Link className='mx-2 text-purple-800 font-semibold' to ='/'> Home </Link>
       <Link className='mx-2 text-purple-800 font-semibold' to ='/Services'> Services </Link>
       <Link className='mx-2 text-purple-800 font-semibold' to ='/Myreviews'> My reviews </Link>
       <Link className='mx-2 text-purple-800 font-semibold' to ='/Addservice'> Add service </Link>
       <Link className='mx-2 text-purple-800 font-semibold' to ='/Login'>  Login </Link>
       <button>logout</button>
    </ul>
  </div>
</div>
</div>
    );
};

export default Header;