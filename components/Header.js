import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import { BiMicrophone, BiSearch } from "react-icons/bi";
import { HiOutlineX } from "react-icons/hi";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;

    window.open(`https://www.google.com/search?q=${term.trim()}`, "_blank");
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex flex-col md:flex-row gap-3 w-full p-6 items-center max-w-7xl mx-auto">
        <Image
          onClick={() => router.push("/")}
          width="180"
          height="80"
          className="cursor-pointer"
          objectFit="contain"
          src="/logo_adsense.png"
          alt="google"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-2.5 md:ml-10 w-full md:w-auto mt-5 md:mt-auto flex-grow items-center">
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Pesquisar..."
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <HiOutlineX
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
          />
          <div className="border border-gray-300 h-6 mr-3 hidden sm:inline-flex " />
          <BiMicrophone className="h6 hidden sm:inline-flex text-gray-400 mr-3" />
          <BiSearch
            onClick={search}
            className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer"
          />
          <button onClick={search} type="submit" hidden></button>
        </form>
      </div>
    </header>
  );
};

export default Header;
