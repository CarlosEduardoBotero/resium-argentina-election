import React from "react";

const Skeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="rounded-sm bg-gray-700 w-48 mb-4 pt-[30px] mt-9"></div>
      <div className="grid grid-cols-2 gap-2">
        <div className="border border-gray-600 rounded-sm p-2">
          <div className="h-3 rounded-full bg-gray-700 w-[80px] mb-6"></div>
          <div className="h-3 rounded-full bg-gray-700 w-[100px]"></div>
        </div>
        <div className="border border-gray-600 rounded-sm p-2">
          <div className="h-3 rounded-full bg-gray-700 w-[100px] mb-6"></div>
          <div className="h-3 rounded-full bg-gray-700 w-[120px]"></div>
        </div>
        <div className="border border-gray-600 rounded-sm p-2 col-span-2">
          <div className="h-3 rounded-full bg-gray-700 w-[180px] mb-6"></div>
          <div className="h-3 rounded-full bg-gray-700 w-[30px]"></div>
        </div>
        <div className="border border-gray-600 rounded-sm p-2">
          <div className="h-3 rounded-full bg-gray-700 w-[120px] mb-6"></div>
          <div className="h-3 rounded-full bg-gray-700 w-[80px]"></div>
        </div>
        <div className="border border-gray-600 rounded-sm p-2">
          <div className="h-3 rounded-full bg-gray-700 w-[100px] mb-6"></div>
          <div className="h-3 rounded-full bg-gray-700 w-[40px]"></div>
        </div>
      </div>
      <div className="rounded-sm bg-gray-700 w-48 mb-4 pt-[30px] mt-9"></div>
      <div className="border border-gray-600 rounded-sm p-2 mb-2 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-2">
        <div className="h-10 rounded-sm bg-gray-700 w-10"></div>
        <div className="h-3 rounded-full bg-gray-700 w-[100px] self-center"></div>
        <div className="col-start-2 flex justify-between">
          <div className="h-3 rounded-full bg-gray-700 w-[70px]"></div>
          <div className="h-3 rounded-full bg-gray-700 w-[50px]"></div>
        </div>
      </div>
      <div className="border border-gray-600 rounded-sm p-2 mb-2 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-2">
        <div className="h-10 rounded-sm bg-gray-700 w-10"></div>
        <div className="h-3 rounded-full bg-gray-700 w-[100px] self-center"></div>
        <div className="col-start-2 flex justify-between">
          <div className="h-3 rounded-full bg-gray-700 w-[70px]"></div>
          <div className="h-3 rounded-full bg-gray-700 w-[50px]"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
