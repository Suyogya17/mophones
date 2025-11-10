import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">
        
        {/* Branding */}
        <h2 className="text-4xl font-extrabold text-white text-center mb-6 tracking-wide">
          <span className="text-white">Mo</span>Phones
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Login to access premium Apple deals & services
        </p>

        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-gray-200 text-sm mb-1 block">Email</label>
            <div className="flex items-center bg-white/20 border border-white/25 rounded-lg px-3 py-2 text-white">
              <FaUser className="text-gray-300 mr-2" />
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-200 text-sm mb-1 block">Password</label>
            <div className="flex items-center bg-white/20 border border-white/25 rounded-lg px-3 py-2 text-white">
              <FaLock className="text-gray-300 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-300" />
                ) : (
                  <FaEye className="text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            Login
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between text-sm text-gray-300 mt-4">
          <Link to="/forget-password" className="hover:underline">
            Forgot password?
          </Link>
          <Link to="/register" className="hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
