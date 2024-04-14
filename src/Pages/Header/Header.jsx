import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className='bg-white w-full fixed top-0 z-50'>
      <div className="navbar mx-auto container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          
          <a className="">
            <img className='w-52' src={logo} alt="Cleaner Service" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className='text-blue-950 font-bold text-lg' to='/'>Home</Link>
            </li>
            <li>
              <Link className='text-blue-950 font-bold text-lg' to='/about'>About</Link>
            </li>
            <li>
              <Link className='text-blue-950 font-bold text-lg' to='/services'>Services</Link>
            </li>
            <li>
              <Link className='text-blue-950 font-bold text-lg' to='/blog'>Blog</Link>
            </li>
            <li>
              <Link className='text-blue-950 font-bold text-lg' to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className='btn btn-info mr-2' to='/login'>LogIn</Link>
          <Link className='btn btn-info' to='/signup'>SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
