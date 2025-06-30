import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          DevTinder
        </Link>
        
        <div className="flex items-center space-x-6">
          <input 
            type="text" 
            placeholder="Search" 
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/feed" 
              className={`text-gray-600 hover:text-gray-800 ${location.pathname === '/feed' ? 'text-gray-800 font-medium' : ''}`}
            >
              Feed
            </Link>
            <Link 
              to="/matches" 
              className={`text-gray-600 hover:text-gray-800 ${location.pathname === '/matches' ? 'text-gray-800 font-medium' : ''}`}
            >
              Matches
            </Link>
            <Link 
              to="/profile" 
              className={`text-gray-600 hover:text-gray-800 ${location.pathname === '/profile' ? 'text-gray-800 font-medium' : ''}`}
            >
              Profile
            </Link>
          </nav>
          
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-700">U</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar