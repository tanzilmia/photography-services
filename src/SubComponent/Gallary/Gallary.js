import React from "react";

const Gallary = () => {
  return (
   <div className="max-w-screen-xl mx-auto">
     <h1 className="text-5xl text-center my-20">Recenty Clicked</h1>
     <div className="max-w-screen-xl my-5 rounded-xl p-5 mx-auto bg-gray-800 text-gray-100">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group bg-gray-500"
          style={{backgroundImage: "url(https://images.unsplash.com/photo-1667976368812-31e7a836158b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)"}}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-gray-100 bg-violet-400"
            >
              Fashion
            </a>
            <div className="flex flex-col justify-start text-center text-gray-100">
              <span className="text-3xl font-semibold leading-none tracking-wide">
                31
              </span>
              <span className="leading-none uppercase">Jul</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold text-gray-100"
            >
             Stylesh PhotoGraphy From Banchin
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
          style={{backgroundImage: "url(https://images.unsplash.com/photo-1667935764607-73fca1a86555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80)"}}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-gray-100 bg-violet-400"
            >
              Model
            </a>
            <div className="flex flex-col justify-start text-center text-gray-100">
              <span className="text-3xl font-semibold leading-none tracking-wide">
                04
              </span>
              <span className="leading-none uppercase">Aug</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-medium text-md group-hover:underline text-gray-100"
            >
              {" "}
              Autem sunt tempora mollitia magnam non voluptates
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
          style={{backgroundImage: "https://images.unsplash.com/photo-1667601140900-1b65f8a9533c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)"}}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-gray-100 bg-violet-400"
            >
              Gravity
            </a>
            <div className="flex flex-col justify-start text-center text-gray-100">
              <span className="text-3xl font-semibold leading-none tracking-wide">
                01
              </span>
              <span className="leading-none uppercase">Aug</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-medium text-md group-hover:underline text-gray-100"
            >
              Inventore reiciendis aliquam excepturi
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
          style={{backgroundImage: "url(https://plus.unsplash.com/premium_photo-1667824282674-04285eef14d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)"}}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-gray-100 bg-violet-400"
            >
              Food
            </a>
            <div className="flex flex-col justify-start text-center text-gray-100">
              <span className="text-3xl font-semibold leading-none tracking-wide">
                28
              </span>
              <span className="leading-none uppercase">Jul</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-medium text-md group-hover:underline text-gray-100"
            >
              Officiis mollitia dignissimos commodi optio vero animi
            </a>
          </h2>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
          style={{backgroundImage: "url(https://images.unsplash.com/photo-1667974241207-5f17ad933feb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)"}}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-gray-100 bg-violet-400"
            >
              Coffe
            </a>
            <div className="flex flex-col justify-start text-center text-gray-100">
              <span className="text-3xl font-semibold leading-none tracking-wide">
                19
              </span>
              <span className="leading-none uppercase">Jul</span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-medium text-md group-hover:underline text-gray-100"
            >
              Doloribus sit illo necessitatibus architecto exercitationem enim
            </a>
          </h2>
        </div>
      </div>
    </div>
   </div>
  );    
};

export default Gallary;
