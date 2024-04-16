import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className='bg-white w-full fixed top-0 z-50'>
      <div className="navbar mx-auto container">
        <div className="navbar-start">
          <a className="">
            <img className='w-52' src={logo} alt="Cleaner Service" />
          </a>
        </div>
        <div className="navbar-center">
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
