import React from 'react';

const Button = ({ name }) => (
  <button className="inline-flex items-center px-4 py-2 bg-gray-200 rounded-md text-gray-800 mr-2 mb-2 ">
    {name}
  </button>
);

export default Button;
