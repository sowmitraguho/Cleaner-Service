
import Carousel from "../Shared/Carousel/Carousel";
import ServiceSummary from "../Shared/ServiceSummary/ServiceSummary";
import { Link, useLoaderData } from "react-router-dom";



const Home = () => {
    
    const services = useLoaderData();
    return (
        <div className="bg-zinc-50">
           
            <Carousel></Carousel>
            <div className="grid justify-items-center pb-16">
            <h2 className="text-7xl text-blue-700 text-center pt-16 mb-4">Our Services</h2>
            <h1 className="text-5xl text-blue-700 text-center pb-16">What We Do...</h1>
            
            <div className="service-card grid grid-cols-3 gap-4 mx-16 pb-16">
                
            {
                services.map(service => <ServiceSummary key={service.id} service={service}></ServiceSummary>)
            }
            </div>
            <Link className='btn bg-yellow-400 text-xl text-blue-950 border-none rounded-r-full rounded-bl-full w-52 h-8  hover:bg-yellow-400 hover:rounded-tl-full hover:rounded-bl-none' to='/services'>See More</Link>
            </div>
            
        </div>
    );
};

export default Home;