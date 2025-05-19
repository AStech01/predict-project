import React from 'react';

const AuthDivider: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center my-6">
      <div className="absolute border-t border-gray-300 w-full"></div>
      <div className="relative bg-white px-4 text-sm text-gray-500">or</div>
    </div>
  );
};

export default AuthDivider;