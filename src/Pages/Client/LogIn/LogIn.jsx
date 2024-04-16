import { Link } from "react-router-dom";

const LogIn = () => {
  
  return (
    <div className="w-full grid justify-items-center p-32 bg-white">
      <h1 className="text-3xl text-indigo-700 my-8">Sign In</h1>

      <div className="w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <form  className="space-y-6" >
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
              <label
                
                className="ms-2 text-sm font-medium text-gray-900"
              >
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
            Login to your account
          </button>
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
