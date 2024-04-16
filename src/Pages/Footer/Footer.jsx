import { Link } from "react-router-dom";
import footerLogo from "../../assets/footer-logo.svg";

const Footer = () => {
  return (
    <div className="bg-regal-blue">
      <footer className="container m-auto footer p-10 grid grid-cols-5 justify-items-center">
        
        <aside className="col-span-2">
          <img className="w-1/2" src={footerLogo} alt="" />
          <p className="text-base text-white">
            Cleaner Industries Ltd.
            <br />
            Sparkle Up Your Space: Where Cleanliness is Our Commitment!
            Discover the Latest Tips and Tricks for a Spotless Home!
          </p>
        </aside>
        <nav className="">
          <h2 className="footer-title text-lg text-white">Services</h2>
          <Link className="link link-hover text-white font-sans text-base">Carpet</Link>
          <Link className="link link-hover text-white font-sans text-base">Seasonal</Link>
          <Link className="link link-hover text-white font-sans text-base">Express</Link>
          <Link className="link link-hover text-white font-sans text-base">Kitchen</Link>
          <Link className="link link-hover text-white font-sans text-base">Bathroom</Link>
          <Link className="link link-hover text-white font-sans text-base">Windows</Link>
        </nav>
        <nav className="">
          <h6 className="footer-title text-lg text-white">News Letter</h6>
          <p className="text-base text-white">
            Shine Bright: Your Monthly Update from Sparkle Up Cleaner Service!
            
          </p>
          <div className="">
          <textarea id="message" rows="1" className="bg-white text-black w-full rounded-l-full rounded-br-full text-lg text-center p-4" placeholder="support@gmail.com"></textarea>
            <Link className='btn  bg-yellow-400 text-xl text-blue-950 border-none rounded-r-full rounded-bl-full w-full h-8  hover:bg-yellow-400 hover:rounded-tl-full hover:rounded-bl-none' to='/services'>Send Now</Link>
          </div>
        </nav>
        <nav className="">
          <h6 className="footer-title text-lg text-white">Quick Link</h6>
          <Link to='/about' className="link link-hover text-white font-sans text-base">About us</Link>
          <Link to='/contact' className="link link-hover text-white font-sans text-base">
            Contact Us
          </Link>
          <Link to='/services' className="link link-hover text-white font-sans text-base">Services</Link>
          <Link to='/terms' className="link link-hover text-white font-sans text-base">
            Terms & Services
          </Link>
        </nav>
        
      </footer>
    </div>
  );
};

export default Footer;
