import React from 'react';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="bg-purple-600 text-white p-4 flex justify-center gap-6">
      <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
      <button onClick={() => onNavigate('about')} className="hover:underline">About</button>
      <button onClick={() => onNavigate('contact')} className="hover:underline">Contact</button>
    </nav>
  );
};


export default Navbar;
