import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-y-7">
        <div className="h-[350px] w-full max-w-sm rounded-md border border-blue-300 p-4 shadow lg:w-[305px]">
          <div className="animate-pulse">
            <div className="mb-4 h-[250px] w-[100%] rounded-xl bg-gray-400 "></div>

            <div className="mb-5 flex items-center justify-between">
              <div className="h-3 w-5/12 rounded-xl bg-slate-700"></div>
              <div className="h-3 w-1/4 rounded-xl bg-slate-700"></div>
            </div>
            <div className="h-3 w-1/4 rounded-xl bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
