"use client";

import { Menu, X } from "lucide-react";

const MobileMenuIcons = () => {


  return (
    <>
      {(
        <Menu
          className="absolute left-5 top-8 h-6 w-6 cursor-pointer md:hidden"
        />
      )}
    </>
  );
};

export default MobileMenuIcons;
