"use client";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <nav className="fixed w-full z-50 top-0 p-3">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-4xl px-6 py-2 mb-4 shadow-lg">
          <div className="flex items-center justify-between">
            <a
              href="https://x.com/Sigmabond01" target="_blank"
              className="flex items-center space-x-3"
            >
              <span className="text-xl font-semibold text-white/90 font-cinzelreg tracking-wide">
                <img src="/logo.webp" className="h-12 w-12" />
              </span>
            </a>
            
            {/* Right side buttons */}
            <div className="flex items-center space-x-3">
              {/* Login Button */}
              <button
                type="button" onClick={() => navigate('/signin')}
                className="text-white/80 hover:text-white font-medium text-sm px-5 py-2.5 
                         transition-all duration-200 hover:bg-white/10 rounded-lg"
              >
                Login
              </button>
              
              {/* Register Button */}
              <button
                type="button" onClick={() => navigate('/signup')}
                className="text-white bg-gradient-to-r from-amber-600 to-orange-600 
                         hover:from-amber-500 hover:to-orange-500 font-medium rounded-lg 
                         text-sm px-6 py-2.5 transition-all duration-200 
                         hover:shadow-lg hover:shadow-amber-500/25 transform hover:-translate-y-0.5"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}