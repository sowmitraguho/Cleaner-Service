import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, logo, details, price, ratings, id } = service;
  return (
    <div className="bg-sky-300 rounded-2xl">
      <div className="card w-full bg-sky-300 shadow-xl h-full">
        <PhotoProvider>
            <PhotoView src={logo}>
            <img className="w-full h-72" src={logo} alt={title} />
            </PhotoView>
        </PhotoProvider>
        <div className="card-body text-slate-600">
            <div className="card-headings">
            <h2 className="card-title text-2xl">{title}</h2>
            <p className="font-bold"> Ratings: {ratings}</p>
            </div>
          
          <p className="text-justify">{details} ... <Link className="text-purple-900" to={`/service/${id}`}>Read More</Link></p>
          
          <div className="h-12 grid grid-cols-2 content-center">
            <p className="text-xl self-center">Price: {price}</p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
