import { Link } from "react-router-dom";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="container m-auto">
          <div className="w-2/3 py-20 ml-20">
            <h1 className="font-sans text-7xl font-bold mb-4">Expert Cleaning Service</h1>
            <h1 className="font-sans text-7xl font-bold mb-4">You Can Trust</h1>
            <p className="font-sans text-2xl w-2/3 leading-8">
              Let us sweep away your worries with our pristine cleaning
              service - because a spotless home is just a call away! 
              
            </p> <br />
            <Link className='btn bg-yellow-400 text-xl text-blue-950 border-none rounded-r-full rounded-bl-full w-52 h-16 hover:bg-yellow-400 hover:rounded-tl-full hover:rounded-bl-none' to='/services'>Explore More</Link>
          </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="container mx-auto">
          <div className="w-2/3 py-20 ml-20">
            <h1 className="font-sans text-7xl font-bold mb-4">Expert Cleaning Service</h1>
            <h1 className="font-sans text-7xl font-bold mb-4">You Can Trust</h1>
            <p className="font-sans text-2xl w-2/3 leading-8">
              Let us sweep away your worries with our pristine cleaning
              service - because a spotless home is just a call away! 
              
            </p> <br />
            <Link className='btn  bg-yellow-400 text-xl text-blue-950 border-none rounded-r-full rounded-bl-full w-52 h-16  hover:bg-yellow-400 hover:rounded-tl-full hover:rounded-bl-none' to='/services'>Explore More</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
