const CountryListSkeleton = () => {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
        <div className="w-full md:w-72 h-14 bg-gray-200 dark:bg-gray-700 rounded-md shadow-sm animate-pulse"></div>
        <div className="w-full md:w-48 h-14 bg-gray-200 dark:bg-gray-700 rounded-md shadow-sm animate-pulse"></div>
      </div>

      <div className="w-44 h-7 mt-10 mb-5 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-sm animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-700 space-y-7 rounded-lg shadow-sm animate-pulse p-5"
          >
            <div className="bg-gray-300 dark:bg-gray-600 aspect-video rounded-lg animate-pulse"></div>
            <div>
              <div className="h-6 rounded-lg animate-pulse bg-gray-300 dark:bg-gray-600 mb-3"></div>
              <div className="space-y-2">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="h-6 w-3/4 rounded-lg animate-pulse bg-gray-300 dark:bg-gray-600"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryListSkeleton;
