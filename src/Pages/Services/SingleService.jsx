import { useLoaderData } from "react-router-dom";

const SingleService = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div className="pt-24 bg-white">
      <div className="card w-full shadow-xl">
        <figure>
          <img
            src={service.logo}
            alt={service.title}
          />
        </figure>
        <div className="card-body text-slate-900">
          <h2 className="card-title text-3xl font-bold">{service.title}</h2>
          <p className="text-sm">Ratings: {service.ratings}</p>
          <p className="text-lg">{service.details}</p>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro non nesciunt iure amet quisquam beatae ratione mollitia necessitatibus, eaque sunt suscipit perspiciatis dolorum minima autem voluptatibus! Pariatur quisquam laboriosam obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus asperiores dicta tempora repudiandae cumque aut ratione inventore molestiae, hic unde corporis aperiam maxime quam officia praesentium voluptate explicabo sequi?consectetur adipisicing elit. Perspiciatis delectus asperiores dicta tempora repudiandae cumque aut ratione inventore molestiae, hic unde corporis aperiam maxime quam officia praesentium voluptate explicabo sequi?consectetur adipisicing elit. Perspiciatis delectus asperiores dicta tempora repudiandae cumque aut ratione inventore molestiae, hic unde corporis aperiam maxime quam officia praesentium voluptate explicabo sequi?consectetur adipisicing elit. Perspiciatis delectus asperiores dicta tempora repudiandae cumque aut ratione inventore molestiae, hic unde corporis aperiam maxime quam officia praesentium voluptate explicabo sequi?consectetur adipisicing elit. Perspiciatis delectus asperiores dicta tempora repudiandae cumque aut ratione inventore molestiae, hic unde corporis aperiam maxime quam officia praesentium voluptate explicabo sequi?</p>
          <p className="text-xl self-center">Price: {service.price}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
