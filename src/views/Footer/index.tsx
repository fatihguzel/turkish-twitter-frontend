import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 text-white py-8  ">
      <div className="container mx-auto flex flex-col items-center">
        <div className="space-x-4 mb-4 flex flex-wrap items-center justify-center">
          <a href="#" className="hover:text-gray-300">
            {t("Footer.Home")}
          </a>
          <a href="#" className="hover:text-gray-300">
            {t("Footer.About")}
          </a>
          <a href="#" className="hover:text-gray-300">
            {t("Footer.Services")}
          </a>
          <a href="#" className="hover:text-gray-300">
            {t("Footer.Contact")}
          </a>
        </div>
        <p>&copy; Turkish Twitter</p>
      </div>
    </div>
  );
};

export default Footer;
