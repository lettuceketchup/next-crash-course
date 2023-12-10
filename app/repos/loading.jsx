import React from "react";

const username = process.env.USER;

const LoadingPage = () => {
  return (
    <div>
      <div
        className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
            "
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((repo) => (
          <div
            key={repo}
            className="card card-compact bg-base-100 shadow-sm rounded-sm m-1 hover:bg-secondary"
          >
            <div className="card-body flex flex-col">
              <div className="flex">
                {/* Repo Name */}
                <div className="skeleton h-4 w-64"></div>
                <span className="ml-auto flex-none">
                  {/* Github Link */}
                  <div className="skeleton h-4 w-6"></div>
                </span>
              </div>
              {/* Repo Description */}
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              {/* Language */}
              <div className="skeleton h-4 w-16"></div>
              <div
                className="flex justify-between  
              "
              >
                {/* Stars */}
                <div className="skeleton h-4 w-8"></div>
                {/* Forks */}
                <div className="skeleton h-4 w-8"></div>
                {/* Watched */}
                <div className="skeleton h-4 w-8"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;
