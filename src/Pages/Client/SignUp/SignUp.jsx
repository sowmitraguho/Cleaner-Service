import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [user, setUser] = useState({
    "email": "Demo@email.com",
    "name": "demo user",
    "password": "demopass"
  });
  


  const handleSignUp = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/clients", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if(data.acknowledged) {
        alert('user added succesfully');
        event.target.reset();
      }
    })

    
    // const email = form.email.value;
    // const password = form.password.value;
    createUser(user.email, user.password)
      .then((result) => {
        console.log(result);
        setError("");
      })
      .catch((err) => {
        
        setError(err.message);
        console.error(error);
      });
    //console.log(createUser, email, password);
    //console.log(user);
    
  };

  const handleOnChange = (event) => {
    const form = event.target;
    const value = form.value;
    const field = form.name;
    const newUser = {...user};
    newUser[field] = value;
    setUser(newUser);
    //console.log(newUser);
  }


  return (
    <div className="w-full grid justify-items-center p-32 bg-white">
      <h1 className="text-3xl text-indigo-700 my-8">Sign Up</h1>

      <div className="w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form onSubmit={handleSignUp} className="space-y-6">
          <h5 className="text-xl font-medium text-gray-900">
            Sign Up to our platform
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your Name
            </label>
            <input onChange={handleOnChange}
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="RobinHood Datta"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              onChange={handleOnChange}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your password
            </label>
            <input
              onChange={handleOnChange}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label className="ms-2 text-sm font-medium text-gray-900">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
          <div className="text-sm font-medium text-gray-500 ">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 hover:underline">
              Return to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
