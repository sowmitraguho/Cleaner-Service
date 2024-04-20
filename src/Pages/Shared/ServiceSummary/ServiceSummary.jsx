import { Link } from "react-router-dom";

const ServiceSummary = ({ service }) => {
  const { title, logo, details, id } = service;
  return (
    <div className="bg-sky-300 rounded-2xl">
      <div className="card w-full bg-sky-300 shadow-xl h-full">
        <figure>
          <img
          className="w-full h-72"
            src={logo}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{`${details.slice(0, 100)} ....`}</p> 
          <div className="card-actions justify-end">
          <Link className="btn btn-primary" to={`/service/${id}`}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSummary;
