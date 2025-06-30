import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">DevTinder</h3>
            <p className="text-gray-400">Connect with amazing developers</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 DevTinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
