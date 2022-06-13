import React from 'react';

const Button = ({ text, color, bgColor, size, borderRadius, icon, width, onClick }) => {
  return (
    <button
      type='button'
      style={{ color, borderRadius, backgroundColor: bgColor }}
      className={`text-${size} p-3 hover:drop-shadow-xl w-${width}`}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
