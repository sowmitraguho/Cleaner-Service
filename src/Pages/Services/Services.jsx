
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router-dom";

const Services = () => {
  
  const services = useLoaderData();

  return (
    <div className="py-24 px-16 grid justify-items-center bg-white w-full">
      <h2 className="text-7xl text-blue-700 text-center mb-4">
        Our Services
      </h2>
      <h1 className="text-5xl text-blue-700 text-center pb-12">
        What We Do...
      </h1>
      <div className="service-card grid grid-cols-3 gap-4 pb-16">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
