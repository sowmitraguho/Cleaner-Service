import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const LogIn = () => {
  const {SignIn} = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  //console.log(from);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        SignIn(email, password)
        .then((result) => { 
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true});
            
          })
          .catch((err) => {
            console.error(err);
            setError('Invalid Email or Password')
          });
  }
  
  return (
    <div className="w-full grid justify-items-center p-32 bg-white">
      <h1 className="text-3xl text-indigo-700 my-8">Sign In</h1>

      <div className="w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form  className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900">
            Sign in to our platform
          </h5>
          <div>
            <label
              
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>
          <div>
            <p className="text-sm text-red-500">{error}</p>
          </div>
          <div className="text-sm font-medium text-gray-500 ">
            Not registered?{" "}
            <Link
              to='/signup'
              className="text-blue-700 hover:underline"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
