"use client";
import { UserInfo } from "@/types";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { FaWaveSquare } from "react-icons/fa";

// Define interface for navigation links
interface NavLink {
  id: number;
  label: string;
  href: string;
}

// Define interface for Navbar props
interface NavProps {
  navLinks: NavLink[];
  userInfo: UserInfo;
}

// Navbar component
const Navbar: FC<NavProps> = ({ navLinks, userInfo }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: "numeric" as const,
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZoneName: "short",
      };

      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        now
      );
      setCurrentDate(formattedDate);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="">
      <div className="flex max-w-6xl mx-auto justify-between p-6 items-center">
        <div className="flex gap-x-4 items-center">
          <div className="text-blue-600">
            <FaWaveSquare size={35} />
          </div>
          <div className="hidden md:flex space-x-6 text-gray-700 font-semibold">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className="hover:text-blue-600">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 text-sm ">{currentDate}</span>
          <Image
            width={40}
            height={40}
            className="ml-4 w-10 object-cover h-10 rounded-full"
            src={userInfo.avatar}
            alt="Profile picture"
            quality={90}
          />
        </div>
      </div>
      {/* Mobile Navigation (hidden by default) */}
      <div className="md:hidden bg-gray-700 p-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <FaWaveSquare size={30} />
          </div>
          <div>{/* TODO: Add mobile navigation toggle button */}</div>
        </div>
        <div className="mt-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="block text-white hover:text-blue-600 my-2"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-4">
          <span className="text-gray-500 text-sm">{currentDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
