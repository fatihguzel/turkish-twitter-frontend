import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8  ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="space-x-4 mb-4 flex flex-wrap items-center justify-center">
          <a href="#" className="hover:text-gray-300">
            Anasayfa
          </a>
          <a href="#" className="hover:text-gray-300">
            Hakkımızda
          </a>
          <a href="#" className="hover:text-gray-300">
            Hizmetler
          </a>
          <a href="#" className="hover:text-gray-300">
            İletişim
          </a>
        </div>
        <p>&copy; Turkish Twitter</p>
      </div>
    </div>
  );
};

export default Footer;
