import { useContext, useState } from "react";
import { Link, Navigate, useLoaderData, useLocation } from "react-router-dom";
import UsersReview from "../Shared/UsersReview/UsersReview";
import PrivateRoute from "../../Routs/PrivateRoute/PrivateRoute";
import Comment from "./Comment";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SingleService = () => {
  const location = useLocation();
  const service = useLoaderData();
  const {user} = useContext(AuthContext)
  const [exUsers, setExUsers] = useState([]);
  fetch("http://localhost:5000/users")
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.users);
      setExUsers(data.users);
    });
  //console.log(service);
  return (
    <div className="pt-24 bg-white">
      <div className="card container mx-auto shadow-xl">
        <figure>
          <img className="w-full" src={service.logo} alt={service.title} />
        </figure>
        <div className="card-body text-slate-900">
          <h2 className="card-title text-3xl font-bold">{service.title}</h2>
          <p className="text-sm">Ratings: {service.ratings}</p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p className="text-lg mx-16 text-justify">
            {service.details} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Porro non nesciunt iure amet quisquam beatae
            ratione mollitia necessitatibus, eaque sunt suscipit perspiciatis
            dolorum minima autem voluptatibus! Pariatur quisquam laboriosam
            obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis delectus asperiores dicta tempora repudiandae cumque
            aut ratione inventore molestiae, hic unde corporis aperiam maxime
            quam officia praesentium voluptate explicabo sequi?consectetur
            adipisicing elit. Perspiciatis delectus asperiores dicta tempora
            repudiandae cumque aut ratione inventore molestiae, hic unde
            corporis aperiam maxime quam officia praesentium voluptate explicabo
            sequi?consectetur adipisicing elit. Perspiciatis delectus asperiores
            dicta tempora repudiandae cumque aut ratione inventore molestiae,
            hic unde corporis aperiam maxime quam officia praesentium voluptate
            explicabo sequi?consectetur adipisicing elit. Perspiciatis delectus
            asperiores dicta tempora repudiandae cumque aut ratione inventore
            molestiae, hic unde corporis aperiam maxime quam officia praesentium
            voluptate explicabo sequi?consectetur adipisicing elit. Perspiciatis
            delectus asperiores dicta tempora repudiandae cumque aut ratione
            inventore molestiae, hic unde corporis aperiam maxime quam officia
            praesentium voluptate explicabo sequi?
          </p>

          <div className="card-actions justify-evenly mx-44">
            <p className="text-2xl text-green-500 ">Price: {service.price}</p>
            <button className="btn btn-primary w-44">Book Now</button>
          </div>
          <div className="reviews mx-16 grid gap-4">
            <h1 className="text-3xl text-blue-500 mb-4">
              What our clients say about us!
            </h1>
            {exUsers.map((user) => (
              <UsersReview key={user.id} user={user}></UsersReview>
            ))}
            {
              user ? <Comment></Comment> : <Link to='/login' state={{ from: location }}  className="text-xl text-blue-500 text-center" replace> LogIn to review </Link> 
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
