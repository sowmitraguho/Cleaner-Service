import Carousel from "../Shared/Carousel/Carousel";
import ServiceSummary from "../Shared/ServiceSummary/ServiceSummary";
import { Link, useLoaderData } from "react-router-dom";
import images from "../../assets/images.jpg";
import Contact from "../Contact/Contact";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="bg-zinc-50">
      <Carousel></Carousel>
      <div className="grid justify-items-center pb-16">
        <h2 className="text-7xl text-blue-700 text-center pt-16 mb-4">
          Our Services
        </h2>
        <h1 className="text-5xl text-blue-700 text-center pb-16">
          What We Do...
        </h1>

        <div className="service-card grid grid-cols-3 gap-4 mx-16 pb-16">
          {services.map((service) => (
            <ServiceSummary key={service.id} service={service}></ServiceSummary>
          ))}
        </div>
        <Link
          className="btn bg-yellow-400 text-xl text-blue-950 border-none rounded-r-full rounded-bl-full w-52 h-8  hover:bg-yellow-400 hover:rounded-tl-full hover:rounded-bl-none"
          to="/services"
        >
          See More
        </Link>
      </div>
      <div
        className="about-us pt-12"
      >
        <div className="container h-full mx-auto grid grid-cols-2 gap-4">
          <div className="left">
            <img src={images} alt="" />
          </div>
          <div className="right my-auto">
            <h1 className="text-5xl text-blue-500">Who Are We?</h1>
            <p className="test-lg text-slate-900 text-justify inline">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium aliquam nulla suscipit, quas molestias distinctio
              nostrum omnis impedit rerum officia inventore quis dolorum id,
              quod voluptatum molestiae? Culpa eius libero commodi ipsa deleniti
              inventore illo optio? Culpa ratione, at corporis voluptas tempora
              itaque sequi eius. Consequatur maiores, ipsa architecto modi in
              nam? Id dolor adipisci inventore esse fugiat a aspernatur, itaque
              veniam error velit architecto repellendus, culpa magni quaerat.
              Sed id ad sequi quam quos dolorem delectus hic corporis ea, quidem
              voluptatibus adipisci tenetur similique, dolor sit deleniti
              corrupti, aperiam rerum magni sunt doloribus! Blanditiis expedita
              quas sed hic explicabo...
            </p>
            <Link className="text-green-500" to="/about">
              Know More
            </Link>
          </div>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
